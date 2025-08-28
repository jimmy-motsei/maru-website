#!/usr/bin/env node
/**
 * Batch-replace the footer across all HTML pages using the canonical footer
 * from `home-1.html` (between the comments:
 *    <!-- footer (standardized Maru) -->  ...  <!-- footer end -->
 *
 * Heuristic:
 *  - Skip `home-1.html` (source of truth).
 *  - Skip any file already containing the marker comment
 *        <!-- footer (standardized Maru) -->
 *    (assumes it's already canonical)
 *  - Otherwise locate the FIRST <footer ... </footer> block and replace it.
 *    If no <footer> exists, append canonical footer before closing </body>.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SOURCE = path.join(ROOT, "home-1.html");

if (!fs.existsSync(SOURCE)) {
  console.error("home-1.html not found. Aborting.");
  process.exit(1);
}

const sourceHtml = fs.readFileSync(SOURCE, "utf8");
const startMarker = "<!-- footer (standardized Maru) -->";
const endMarker = "<!-- footer end -->";

const startIdx = sourceHtml.indexOf(startMarker);
const endIdx = sourceHtml.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) {
  console.error("Could not locate canonical footer markers in home-1.html");
  process.exit(1);
}

const canonicalFooter = sourceHtml.slice(startIdx, endIdx + endMarker.length);

const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let updated = 0;

htmlFiles.forEach((file) => {
  if (file === "home-1.html") return; // source of truth
  const full = path.join(ROOT, file);
  let html = fs.readFileSync(full, "utf8");

  if (html.includes(startMarker)) {
    // already canonical
    return;
  }

  // Find existing footer block
  const footerOpenRegex = /<footer[^>]*>/i;
  const footerCloseTag = "</footer>";

  const openMatch = footerOpenRegex.exec(html);
  if (openMatch) {
    const openIndex = openMatch.index;
    const afterOpen = openIndex + openMatch[0].length;
    const closeIndex = html.indexOf(footerCloseTag, afterOpen);
    if (closeIndex !== -1) {
      const endOfFooter = closeIndex + footerCloseTag.length;
      // Replace existing footer block including any preceding footer comment if within 120 chars before <footer>
      let replaceStart = openIndex;
      const preSlice = html.slice(Math.max(0, openIndex - 200), openIndex);
      const commentIdx = preSlice.lastIndexOf("<!--");
      if (commentIdx !== -1) {
        const maybeCommentEnd = preSlice.indexOf("-->", commentIdx);
        if (maybeCommentEnd !== -1 && maybeCommentEnd === preSlice.length - 3) {
          // comment ends right before footer tag, include it
          replaceStart = openIndex - (preSlice.length - commentIdx);
        }
      }
      html =
        html.slice(0, replaceStart) +
        canonicalFooter +
        "\n" +
        html.slice(endOfFooter);
      updated++;
    } else {
      // No closing footer - append canonical before </body>
      html = injectBeforeBodyEnd(html, canonicalFooter);
      updated++;
    }
  } else {
    // No footer tag - append canonical before </body>
    html = injectBeforeBodyEnd(html, canonicalFooter);
    updated++;
  }

  fs.writeFileSync(full, html, "utf8");
});

console.log(
  `Footer update complete. Files processed: ${htmlFiles.length}. Updated: ${updated}.`
);

function injectBeforeBodyEnd(html, snippet) {
  const bodyClose = html.lastIndexOf("</body>");
  if (bodyClose === -1) return html + "\n" + snippet + "\n";
  return (
    html.slice(0, bodyClose) + "\n" + snippet + "\n" + html.slice(bodyClose)
  );
}
