import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Blue Vanda Orchid Jute Bouquet",
    rating: 5,
    price: 3000,
    discount: 2000,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393366/NegProjects/E-commerce/Orchids/DSC_1302_cfhtl3.avif",
    inCart: false,
    wishlist: false,
    qty: 1,
    desc: [
      "Bunch of 6 Blue Orchids",
      "Jute Packing (Colour may be white or brown)",
    ],
  },

  {
    _id: uuid(),
    name: "Paradise Mixed Roses Bouquet",
    rating: 4.8,
    price: 1500,
    discount: 1200,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392267/NegProjects/E-commerce/Roses/rose1_ghfy7g.avif",

    qty: 1,
    desc: ["Bunch of 25 Red & White Roses", "Red And White Paper Packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Classic Aura 12 Red Roses Bouquet",
    rating: 4.5,
    price: 1299,
    discount: 849,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392267/NegProjects/E-commerce/Roses/rose3_yy3y54.avif",
    qty: 1,
    desc: [" 12 red roses ", "2 Layer White Paper packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Vibrant Blue Orchids",
    rating: 4.8,
    price: 1749,
    discount: 1249,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393727/NegProjects/E-commerce/Orchids/or5_t9buok.avif",
    qty: 1,
    desc: ["6 Blue Orchids", "2 Layer Sky-blue & White Paper Packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Bouquet Of Orchids",
    rating: 4.5,
    price: 1549,
    discount: 949,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393727/NegProjects/E-commerce/Orchids/or7_eey2xd.avif",
    qty: 1,
    desc: ["5 Orchids", "2 White Paper Packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Romance in Scarlet Hues",
    rating: 3,
    price: 1499,
    discount: 1249,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392267/NegProjects/E-commerce/Roses/rose6_wuz87i.avif",
    qty: 1,
    desc: ["25 Roses", "2 Layer White Paper packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Sunny Yellow Rose Bouquet",
    rating: 3.9,
    price: 2899,
    discount: 2549,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392267/NegProjects/E-commerce/Roses/rose2_rc3xur.avif",
    qty: 1,
    desc: ["Arrangement of 15 Yellow Roses", "2 layer white paper packing"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Pink Oriental Lily Splendor",
    rating: 2,
    price: 1649,
    discount: 999,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/L6_nhwefj.avif",
    qty: 1,
    desc: ["Bunch of 6 Pink Oriental Lilies"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Love Lilies",
    rating: 5,
    price: 2449,
    discount: 1999,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/L7_ey0vnu.avif",
    qty: 1,
    desc: ["Arrangement of 6 Pink and White Lilies"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Lily Elegance",
    rating: 5,
    price: 2400,
    discount: 2000,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/L5_paqak0.avif",
    qty: 1,
    desc: ["Beautiful Arrangement of 46 Mixed", "6 Pink Lilies"],
    inCart: false,
    wishlist: false,
  },
];
