import type { StaticImageData } from "next/image";

export type ShowCaseGalleryItem = {
  id: number;                           
  images: (string | StaticImageData)[]; 
};
