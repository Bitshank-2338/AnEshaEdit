# Notes: CMS + Notifications (Zero $)

This repo currently supports **GitHub Pages** hosting and **Jekyll posts**.

For a true "client can publish without code" CMS, the lowest-friction $0 path is:

- **Netlify Hosting (free)**
- **Netlify Identity (free)**
- **Git Gateway (free)**
- **Decap CMS** at `/admin`

For notifications:
- Use the Jekyll RSS feed (`/feed.xml`) with **MailerLite RSS-to-email automation**.

No API keys should be placed in frontend JavaScript.
