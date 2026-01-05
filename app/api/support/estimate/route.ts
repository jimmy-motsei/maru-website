
import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import QuickBooks from "node-quickbooks";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { customer, ticket, estimate } = payload;

    // Initialize QuickBooks client
    // Note: In production you'd likely need a valid access token first, 
    // possibly by exchanging a refresh token.
    const qbo = new QuickBooks(
      process.env.QBO_CLIENT_ID,
      process.env.QBO_CLIENT_SECRET,
      process.env.QBO_ACCESS_TOKEN || "invalid_token_placeholder", 
      false, // no token secret
      process.env.QBO_REALM_ID,
      process.env.QBO_ENV === "sandbox", // use sandbox?
      true, // debug
      null, // minorversion
      "2.0", // oauth version
      process.env.QBO_REFRESH_TOKEN
    );

    // Helper to promisify QBO methods
    const refreshAccessToken = () => {
        return new Promise((resolve, reject) => {
            qbo.refreshAccessToken((err: any, refreshResponse: any) => {
                if (err) reject(err);
                else resolve(refreshResponse);
            });
        });
    };

    const findCustomers = (query: string) => {
        return new Promise<any>((resolve, reject) => {
            qbo.findCustomers({ Query: query }, (err: any, response: any) => {
                if (err) reject(err);
                else resolve(response);
            });
        });
    };

    const createCustomer = (customerData: any) => {
        return new Promise<any>((resolve, reject) => {
            qbo.createCustomer(customerData, (err: any, response: any) => {
                if (err) reject(err);
                else resolve(response);
            });
        });
    };

    const createEstimate = (estimateData: any) => {
        return new Promise<any>((resolve, reject) => {
            qbo.createEstimate(estimateData, (err: any, response: any) => {
                if (err) reject(err);
                else resolve(response);
            });
        });
    };

    // 1. Refresh Token
    try {
        await refreshAccessToken();
    } catch (error) {
        console.error("Failed to refresh QBO token", error);
        return NextResponse.json({ ok: false, error: "Failed to authenticate with accounting system" }, { status: 500 });
    }

    // 2. Find or Create Customer
    let customerId;
    const existingCustomers = await findCustomers(`Email = '${customer.email}'`);
    
    if (existingCustomers.QueryResponse.Customer && existingCustomers.QueryResponse.Customer.length > 0) {
        customerId = existingCustomers.QueryResponse.Customer[0].Id;
    } else {
        const newCustomer = await createCustomer({
            DisplayName: customer.company || customer.name,
            GivenName: customer.name.split(" ")[0],
            FamilyName: customer.name.split(" ").slice(1).join(" ") || "",
            PrimaryEmailAddr: { Address: customer.email },
            PrimaryPhone: customer.phone ? { FreeFormNumber: customer.phone } : undefined,
        });
        customerId = newCustomer.Id;
    }

    // 3. Create Estimate
    const estimateData = {
        CustomerRef: { value: customerId },
        TxnDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
        // Due 7 days from now
        ExpirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        Line: [
            {
                DetailType: "SalesItemLineDetail",
                Amount: estimate.subtotal,
                SalesItemLineDetail: {
                    ItemRef: { value: process.env.QBO_ITEM_SERVICE_ID || "1" }, // Fallback ID
                    Qty: estimate.hours,
                    UnitPrice: estimate.rate,
                },
                Description: `Support Ticket: ${ticket.subject} (${ticket.priority} priority, ${ticket.asset_type})`,
            }
        ],
        DocNumber: `EST-${Date.now()}`,
        PrivateNote: `Support Priority: ${ticket.priority}. Environment: ${ticket.environment}. URL: ${ticket.url}`
    };

    // Add deposit line if required
    if (estimate.deposit > 0) {
        estimateData.Line.push({
            DetailType: "SalesItemLineDetail",
            Amount: estimate.deposit,
            SalesItemLineDetail: {
                ItemRef: { value: process.env.QBO_ITEM_SERVICE_ID || "1" },
                Qty: 1,
                UnitPrice: estimate.deposit,
            },
            Description: "Support ticket deposit (first hour)",
        });
    }

    const createdEstimate = await createEstimate(estimateData);
    const estimateId = createdEstimate.Id;

    // 4. Generate Payment Link (Mock or Real)
    // Legacy code had a mock link to a separate page. We can return a construct here.
    let paymentUrl = "";
    if (!estimate.has_sla && estimate.deposit > 0) {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maruonline.com";
        // paymentUrl = `${siteUrl}/pay/fnb?amount=${estimate.deposit}&ref=${estimateId}`;
        // Since we don't have the /pay page migrated yet, we might render a placeholder or just return the logic.
        // For now, let's keep it null/empty or a placeholder if the user has a real payment gateway.
        // The prompt says "Include it as part of maru-website".
    }

    return NextResponse.json({
        ok: true,
        estimateId,
        paymentUrl
    });

  } catch (error: any) {
    console.error("Error processing estimate:", error);
    return NextResponse.json({ ok: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
