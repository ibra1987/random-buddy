import { MetadataRoute } from "next";


 export const baseUrl ="https://randombuddy.com"

export default function sitemap(): MetadataRoute.Sitemap {

   
    const routes = ["", "/fantasy-name-generator", "/fantasy-team-name-generator", "/creepy-name-generator", "/instagram-name-generator", "/random-names-wheel-picker",  "/about", "/contact"];

    return routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }));
}