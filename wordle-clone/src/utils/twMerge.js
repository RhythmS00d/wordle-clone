import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

/**
 * 
 * @param  {...any} inputs 
 * @returns a function that joins all the tailwind inputs
 * 
 * @example "https://www.npmjs.com/package/tailwind-merge"
 */

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};