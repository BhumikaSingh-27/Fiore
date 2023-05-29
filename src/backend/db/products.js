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
    discountedPrice: 2000,
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
    discountedPrice: 1200,
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
    discountedPrice: 849,
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
    discountedPrice: 1249,
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
    discountedPrice: 949,
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
    discountedPrice: 1249,
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
    discountedPrice: 2549,
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
    discountedPrice: 999,
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
    discountedPrice: 1999,
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
    discountedPrice: 2000,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/L5_paqak0.avif",
    qty: 1,
    desc: ["Beautiful Arrangement of 46 Mixed", "6 Pink Lilies"],
    inCart: false,
    wishlist: false,
  },
  {
    _id: uuid(),
    name: "Eternity White Roses Bouquet",
    rating: 4.9,
    price: 1000,
    discountedPrice: 745,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684396315/NegProjects/E-commerce/Roses/rose_main_g3oej0.avif",
    inCart: false,
    wishlist: false,
    qty: 1,
    desc: ["Bunch of 12 White roses", "white paper packing"],
  },

  {
    _id: uuid(),
    name: "Yellow Rose Basket",
    rating: 2.5,
    price: 2000,
    discountedPrice: 1595,
    categoryName: "Roses",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392268/NegProjects/E-commerce/Roses/rose7_y2wsyz.avif",
    inCart: false,
    wishlist: false,
    qty: 1,
    desc: ["Bunch of 25 Yellow Roses in a Basket"],
  },
  {
    _id: uuid(),
    name: "Sunny Lily Box",
    rating: 5,
    price: 3500,
    discountedPrice: 2650,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392970/NegProjects/E-commerce/Lily/lily2_pguyuj.avif",

    qty: 1,
    desc: ["Arrangement of 6 Yellow Lilies", "Blue Floweraura Box"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Sunny Lily Box",
    rating: 3.9,
    price: 2000,
    discountedPrice: 1750,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/l3_h8fz9t.avif",

    qty: 1,
    desc: ["Bunch of 10 Red Carnations and 3 White Lilies"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "White Lily N Glass Vase",
    rating: 5,
    price: 3450,
    discountedPrice: 3000,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684392970/NegProjects/E-commerce/Lily/lily-main_xhfudr.avif",

    qty: 1,
    desc: ["Arrangement of 8 White Lilies", "Red Vase"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "White N Bright Yellow Lilies Bunch",
    rating: 2.5,
    price: 3000,
    discountedPrice: 2000,
    categoryName: "Lilies",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393082/NegProjects/E-commerce/Lily/L4_lwimbl.avif",
    qty: 1,
    desc: ["Arrangement of 8 White and Yellow Lilies", "Glass Vase"],
    inCart: false,
    wishlist: false,
  },
  {
    _id: uuid(),
    name: "Tranquil Orchids and Lilies",
    rating: 4.9,
    price: 3000,
    discountedPrice: 2500,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393728/NegProjects/E-commerce/Orchids/or9_a9gsdi.avif",

    qty: 1,
    desc: ["Bunch of 4 Blue Orchids", "2 White Lilies in a Round Glass Vase"],
    inCart: false,
    wishlist: false,
  },
  {
    _id: uuid(),
    name: "Bellina Purple Orchid Bouquet",
    rating: 3.5,
    price: 1500,
    discountedPrice: 1000,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393727/NegProjects/E-commerce/Orchids/or3_wvrpf5.avif",
    qty: 1,
    desc: ["Bunch of 6 Purple Orchids"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Dazzling Dynamic Flower Arrangement",
    rating: 3.4,
    price: 2500,
    discountedPrice: 1795,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393728/NegProjects/E-commerce/Orchids/or8_afbazo.avif",
    qty: 1,
    desc: ["6 blue Orchids3 Anthurium", "2 Ming Fern and Raffia in the Basket"],
    inCart: false,
    wishlist: false,
  },

  {
    _id: uuid(),
    name: "Bowl Of Moms Love",
    rating: 2.0,
    price: 3000,
    discountedPrice: 2500,
    categoryName: "Orchids",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393956/NegProjects/E-commerce/Orchids/orch_fwftgt.avif",

    qty: 1,
    desc: ["4 Pink Carnation", "6 Blue Orchids", "Fish Glass bowl"],
    inCart: false,
    wishlist: false,
  },
  
];
