module.exports = {
  env: process.env.ELEVENTY_ENV,
  production_url: "https://bobmonsour.com",
  title: "Bob Monsour | Home",
  description:
    "The personal website of Bob Monsour. Enjoying learning and deploying websites with 11ty and Netlify.",
  url: "https://www.bobmonsour.com",
  language: "en",
  author: {
    name: "Bob Monsour",
    email: "bob.monsour@gmail.com",
    url: "https://bobmonsour.com/",
  },
  mainNavLinks: [
    { url: "/pages/archive/", text: "Archive" },
    { url: "/pages/about/", text: "About" },
  ],
};
