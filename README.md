# Amoli Technologies website (Angular)

Pages: home (`/`), **ClassKendra** (`/classkendra`) and **QuoteKaro** (`/quotekaro`).

## 1. Edit the content
Open **`src/app/site-config.ts`**. That one file holds everything:
- company details, phone, WhatsApp number, email, LinkedIn
- `PRODUCTS`: each product's card, page content, plans, screenshots and FAQ
- custom-work services, client projects (case studies), prices, FAQ

Product screenshots are in `src/assets/products/`, the logo files in `src/assets/brand/`.
To add a third product: add it to `PRODUCTS` and add a route for its `slug` in `src/app/app.routes.ts`.
Page styles are in `src/site.scss`.

WhatsApp number format: country code + number, digits only, e.g. `919876543210`.

## 2. Run it on your computer
```
npm install
npm start
```
Open http://localhost:4200

## 3. Add another project
In `site-config.ts`, copy the Nexus block inside `PROJECTS`, change the text,
and put its screenshots in `src/assets/work/` (WebP or JPG, ~1440px wide for desktop, 390px for phone).

## 4. Publish free on GitHub Pages
1. Create a new GitHub repository (e.g. `portfolio`) and push this project.
2. Run:
```
npx ng deploy --base-href=/portfolio/
```
(use your repository name). With your own domain (e.g. yourname.in):
```
npx ng deploy --base-href=/ --cname=www.yourname.in
```
