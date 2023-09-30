export const socialIcons = [
  {
    id: "123",
    icon: "fa-facebook",
    color: "#3A5809D",
    tooltip: "share on facebook",
    link: "https://fb.com",
  },
  {
    id: "124",
    icon: "twitter",
    color: "#3A5809D",
    tooltip: "tweet on twitter",
    link: "https://twitter.com",
  },
  {
    id: "125",
    icon: "github",
    color: "#3A5809D",
    tooltip: "Github",
    link: "https://github.com",
  },
];

//Data structuring
export const product = {
  breadcrumbs: [
    {
      text: "Home",
      link: "https:/google.com?q=home",
    },
    {
      text: "Shope",
      link: "https:/google.com?q=shope",
    },
    {
      text: "Men",
      link: "https:/google.com?q=men",
    },
    {
      text: "T-Shirts",
      link: "https:/google.com?q=t-shirt",
    },
  ],

  title: "Osaka Entry Tee Superdry 12",
  prices: {
    sale: 29.0,
    regular: 39.0,
  },
  summary: "lorem lorem lorem lorem lorem lorem lorem lorem",

  categories: [
    {
      text: "Men",
      link: "#",
    },
    {
      text: "T-Shirt",
      link: "#",
    },
  ],

  tags: [
    {
      text: "Men",
      link: "#",
    },
    {
      text: "T-Shirt",
      link: "#",
    },
  ],

  share: socialIcons,
  images: [
    {
      thumb: "thumb-url",
      original: "original-url",
      alt: "alt text",
      featured: true,
    },
    {
      thumb: "thumb-url",
      original: "original-url",
      alt: "alt text",
      featured: false,
    },
  ],

  wishlist: true,
};

/* ---------------------------------- */
const menus = [
  {
    id: 1,
    text: "Home",
    link: "#",
  },
  {
    id: 2,
    text: "Home Page 1",
    link: "#",
  },
  {
    id: 3,
    text: "Home Page 2",
    link: "#",
  },
  {
    id: 4,
    text: "Shope",
    link: "#",
  },
  {
    id: 5,
    text: "Two Column",
    link: "#",
  },
  {
    id: 6,
    text: "Single Column",
    link: "#",
  },
];

/* create child map array */
const childMap = [
  {
    id: 1,
    children: [2, 3],
  },
  {
    id: 4,
    children: [5, 6],
  },
];
