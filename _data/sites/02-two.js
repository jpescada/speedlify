module.exports = {
  name: "two", // optional, falls back to object key
  description: "group two websites",
  options: {
    frequency: 60 * 23, // 23 hours
    // if the sites don’t share assets on the same domain, we can reset
    // chrome with each run instead of each site in every run (it’s faster)
    freshChrome: "site"
  },
  urls: [
    "https://yummelier.com/",
    "https://yummelier.com/behind-the-scenes/"
  ]
};