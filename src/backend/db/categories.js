import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "You Can WIN",
    rating: "2",
    price: "5000",
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392267/NegProjects/E-commerce/Roses/rose3_yy3y54.avif",
  },
  {
    _id: uuid(),
    name: "You are Winner",
    rating: "4",
    price: "3000",
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392970/NegProjects/E-commerce/Lily/lily-main_xhfudr.avif",
  },
  {
    _id: uuid(),
    name: "Think and Grow Rich",
    rating: "5",
    price: "1000",
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393366/NegProjects/E-commerce/Orchids/DSC_1302_cfhtl3.avif",
  },
];
