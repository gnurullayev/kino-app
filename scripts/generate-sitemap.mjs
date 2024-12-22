import axios from "axios";
import { promises as fs } from "fs";
import path from "path";

async function generateSitemap() {
  const response = await axios.get("https://topmovie.me/api/v1/sitemaps");
  const pages = response.data.data;

  console.log(pages);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
        <url>
        <loc>https://topmovie.me${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        </url>
    `
      )
      .join("")}
    </urlset>`;

  // Sitemapni `public` papkasiga yozish
  const filePath = path.join(process.cwd(), "public", "sitemap.xml");
  await fs.writeFile(filePath, sitemapContent);
  console.log("Sitemap generated successfully!");
}

generateSitemap().catch((err) =>
  console.error("Error generating sitemap:", err)
);
