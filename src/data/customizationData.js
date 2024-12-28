export const customizationData = {
  brands: [
    {
      name: "Apple Watch SE",
      image: "/apple/apple-se.jpeg",
      price: "1000",
      cases: [
        { name: "Aluminum", image: "/apple/se-alum.jpeg", price:'1600'},
        { name: "Titanium", image: "/apple/se-tita.jpeg" , price: '2000'},
      ],
      sizes: [
        { name: "40mm", image: "/apple/se-alum.jpeg" },
        { name: "44mm", image: "/apple/se-tita.jpeg" },
      ],
      bands: [
        {
          name: "Sport Band",
          image: "/apple/se-sport.jpeg",
          description: "Lightweight and durable band, perfect for workouts.",
        },
        {
          name: "Braided Solo Loop",
          image: "/apple/se-braided.webp",
          description: "Comfortable and stretchable braided band.",
        },
      ],
    },
    {
      name: "Apple Watch Hermes Series 10",
      image: "/apple/apple-hermes.jpeg",
      price: '1500',
      sizes: [
        { name: "41mm", image: "/apple/hermes42.webp" },
        { name: "45mm", image: "/apple/hermes46.webp" },
      ],
      cases: [
        { name: "Aluminum", image: "/apple/herm-alum.jpeg", price: '3000' },
        { name: "Titanium", image: "/apple/hermes-tita.jpeg", price:"2500" },
      ],
      bands: [
        {
          name: "FineWoven",
          image: "/apple/hermes-fine.jpeg",
          description: "Elegant and eco-friendly band, crafted to perfection.",
        },
        {
          name: "Nike Sport Band",
          image: "/apple/hermes-nike.jpeg",
          description: "A sporty band designed for active lifestyles.",
        },
      ],
    },
    {
      name: "Apple Watch Series 10",
      image: "/apple/apple-series.jpeg",
      sizes: [
        { name: "41mm", image: "/apple/series-10-42.webp" },
        { name: "45mm", image: "/apple/series10-46.webp" },
      ],
      cases: [
        { name: "Aluminum", image: "/apple/series10-alu.jpeg" ,price: '2000' },
        { name: "Titanium", image: "/apple/series10-tit.jpeg" , price: "1500"},
      ],
      bands: [
        {
          name: "Solo Loop",
          image: "/apple/series10-solo.jpeg",
          description: "Simple, stretchable, and comfortable band.",
        },
        {
          name: "Nike Sport Loop",
          image: "/apple/serie-nike.jpeg",
          description: "Breathable and lightweight loop band.",
        },
      ],
    },
  ],
};
