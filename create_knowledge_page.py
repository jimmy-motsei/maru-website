#!/usr/bin/env python3
"""
Create Knowledge Page Script
Generates a new knowledge.html page with all 10 knowledge articles
"""

import os

# Article data
ARTICLES = [
    {
        "title": "Rogerwilco Launches AI-Powered Search Tool Echo for Enhanced Digital Marketing",
        "category": "AI MARKETING",
        "date": "august 1 2025",
        "image": "img/optimized/blog/ai_agents-1280.webp",
        "alt": "AI Agents and Search Technology",
        "link": "content/knowledge/rogerwilco-ai-search-echo-launch.md",
        "summary": "Rogerwilco, a South African digital marketing agency, has launched Echo, an AI-powered search tool designed to enhance digital marketing capabilities. The launch represents a step forward in the integration of artificial intelligence within South Africa's digital marketing ecosystem."
    },
    {
        "title": "Government Urged to Adopt AI Ethically and Inclusively in South Africa",
        "category": "AI POLICY",
        "date": "january 1 2025",
        "image": "img/optimized/blog/ai_ethics-1280.webp",
        "alt": "AI Ethics and Governance",
        "link": "content/knowledge/government-ai-ethical-adoption.md",
        "summary": "Athi Geleba, the Presidency's digital communications head, has emphasized the critical importance of adopting artificial intelligence ethically and inclusively within South Africa's government systems."
    },
    {
        "title": "Microsoft Invests R5.4 Billion in South Africa's AI Infrastructure Development",
        "category": "AI INFRASTRUCTURE",
        "date": "march 6 2025",
        "image": "img/optimized/works/nodes_network-1280.webp",
        "alt": "Neural Network Infrastructure",
        "link": "content/knowledge/microsoft-south-africa-ai-investment.md",
        "summary": "Microsoft has announced a substantial investment of R5.4 billion in South Africa's artificial intelligence infrastructure, marking a commitment to the country's technological development."
    },
    {
        "title": "Global AI Regulation Developments Impact South African Business Landscape",
        "category": "AI REGULATION",
        "date": "january 1 2025",
        "image": "img/optimized/blog/google_deep_mind-1280.webp",
        "alt": "Global AI Regulation",
        "link": "content/knowledge/ai-general-intelligence-regulation.md",
        "summary": "Recent developments in global artificial intelligence regulation are creating new frameworks that will impact businesses operating in international markets, including South African companies."
    },
    {
        "title": "Artificial General Intelligence Concerns: Implications for South African Business Strategy",
        "category": "AI STRATEGY",
        "date": "january 1 2025",
        "image": "img/optimized/blog/ai_brain-1280.webp",
        "alt": "Artificial General Intelligence",
        "link": "content/knowledge/artificial-general-intelligence-concerns.md",
        "summary": "The development of Artificial General Intelligence (AGI) presents both unprecedented opportunities and significant challenges for businesses and societies worldwide."
    },
    {
        "title": "AI Regulation in South Africa: Prioritizing Human Security in Business Operations",
        "category": "AI REGULATION",
        "date": "january 1 2025",
        "image": "img/optimized/blog/ai_ethics-1280.webp",
        "alt": "AI Human Security",
        "link": "content/knowledge/ai-regulation-human-security-south-africa.md",
        "summary": "South Africa's approach to artificial intelligence regulation emphasizes the importance of human security and welfare in technological development and deployment."
    },
    {
        "title": "99% of SAP Survey Respondents Identify AI Skills as Essential for Business Success",
        "category": "AI SKILLS",
        "date": "may 1 2025",
        "image": "img/optimized/blog/hi_five_table-1280.webp",
        "alt": "AI Skills Development",
        "link": "content/knowledge/ai-skills-essential-sap-survey.md",
        "summary": "A comprehensive survey conducted by SAP Africa has revealed that 99% of respondents consider artificial intelligence skills essential for business success in the current digital economy."
    },
    {
        "title": "AI Adoption Surges Among South Africa's Small and Medium Businesses",
        "category": "AI ADOPTION",
        "date": "january 1 2025",
        "image": "img/optimized/works/ai_chat_app-1280.webp",
        "alt": "AI Chat Application",
        "link": "content/knowledge/ai-adoption-south-african-smbs.md",
        "summary": "South Africa's small and medium businesses (SMBs) are experiencing a surge in artificial intelligence adoption, driven by the need to improve operational efficiency and maintain competitive positioning."
    },
    {
        "title": "Generative AI Impact on SME Productivity: South African Research Insights",
        "category": "AI PRODUCTIVITY",
        "date": "january 1 2025",
        "image": "img/optimized/blog/sparkles-1280.webp",
        "alt": "Generative AI Sparkles",
        "link": "content/knowledge/generative-ai-sme-productivity-south-africa.md",
        "summary": "Recent research published on ResearchGate demonstrates that generative artificial intelligence has reached a level of maturity that enables productivity improvements for small and medium enterprises in South Africa."
    },
    {
        "title": "AI Business Transformation: Strategic Implications for South African SMEs",
        "category": "AI TRANSFORMATION",
        "date": "january 1 2025",
        "image": "img/optimized/works/boardroom_table_top-1280.webp",
        "alt": "Business Transformation",
        "link": "content/knowledge/ai-business-transformation-south-africa.md",
        "summary": "Research published in Scientific Research Publishing examines the transformative impact of artificial intelligence on business operations and strategies in South Africa."
    }
]

def generate_article_html(article):
    """Generate HTML for a single article"""
    return f'''
                <div class="col-lg-12">
                  <a
                    href="{article['link']}"
                    class="mil-blog-card mil-blog-card-hori mil-more mil-mb-60"
                  >
                    <div class="mil-cover-frame mil-up">
                      <picture class="">
                        <source type="image/webp" srcset="{article['image']}" sizes="(max-width: 768px) 100vw, 50vw">
                        <img src="{article['image']}" alt="{article['alt']}" loading="lazy" decoding="async" />
                      </picture>
                    </div>
                    <div class="mil-post-descr">
                      <div class="mil-labels mil-up mil-mb-30">
                        <div class="mil-label mil-upper mil-accent">
                          {article['category']}
                        </div>
                        <div class="mil-label mil-upper">{article['date']}</div>
                      </div>
                      <h4 class="mil-up mil-mb-30">
                        {article['title']}
                      </h4>
                      <p class="mil-post-text mil-up mil-mb-30">
                        {article['summary']}
                      </p>
                      <div class="mil-link mil-dark mil-arrow-place mil-up">
                        <span>Read more</span>
                      </div>
                    </div>
                  </a>
                </div>'''

def main():
    """Generate the knowledge page HTML"""
    
    # Read the existing knowledge.html template
    with open('knowledge.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the section to replace (between the row div and the closing section)
    start_marker = '              <div class="row">'
    end_marker = '              </div>'
    
    # Generate all article HTML
    articles_html = ''
    for article in ARTICLES:
        articles_html += generate_article_html(article)
    
    # Replace the content
    new_content = start_marker + articles_html + '\n              ' + end_marker
    
    # Find and replace the old content
    import re
    pattern = r'              <div class="row">.*?              </div>'
    updated_content = re.sub(pattern, new_content, content, flags=re.DOTALL)
    
    # Write the updated content
    with open('knowledge.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("✅ Knowledge page updated with all 10 articles!")

if __name__ == "__main__":
    main()
