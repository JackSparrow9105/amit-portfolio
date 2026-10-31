# My Portfolio Website (Angular)

## 1. Put in your details
Open **`src/app/site-config.ts`**. That one file holds everything:
- your name, city, phone, WhatsApp number, email, LinkedIn / GitHub
- services, projects (case studies), prices, FAQ

Replace everything in `[SQUARE BRACKETS]`. Also update the title in **`src/index.html`**.

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
