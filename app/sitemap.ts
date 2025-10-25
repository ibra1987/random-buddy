import { MetadataRoute } from "next";


 export const baseUrl ="https://www.randombuddy.com"

export default function sitemap(): MetadataRoute.Sitemap {

   
    const routes = ["","/gnome-name-generator", "/fantasy-name-generator", "/fantasy-team-name-generator", "/creepy-name-generator", "/instagram-name-generator", "/random-names-wheel-picker",  "/about", "/contact"];

    return routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }));
}