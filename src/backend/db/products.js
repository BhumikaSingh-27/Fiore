import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "You Can WIN",
    rating: "Shiv Khera",
    price: "5000",
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684396315/NegProjects/E-commerce/Roses/rose_main_g3oej0.avif",
  },
  {
    _id: uuid(),
    name: "You are Winner",
    rating: "Junaid Qureshi",
    price: "3000",
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392970/NegProjects/E-commerce/Lily/lily-main_xhfudr.avif",
  },
  {
    _id: uuid(),
    name: "Think and Grow Rich",
    rating: "Shiv Khera",
    price: "1000",
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393366/NegProjects/E-commerce/Orchids/DSC_1302_cfhtl3.avif",
  },
];
