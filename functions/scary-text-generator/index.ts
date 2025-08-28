
import { styleMap } from "@/lib/creepy-letters"

export const generateCreepyText = (input: string, styles: string[]) :string => {


   // if styles does not contain any style, return input
   if (styles.length === 0) return input;
   //if styles contain one style, apply that style
   if (styles.length === 1) {
     const map = styleMap[styles[0]];
     return input.split("").map((char) => map[char] || char).join("");
   }
   // if styles contain multiple styles, apply them randomly
   return input.split("").map((char) => {
     const randomStyle = styles[Math.floor(Math.random() * styles.length)];
     const map = styleMap[randomStyle];
     return map[char] || char;
   }).join("");
}