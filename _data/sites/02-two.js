module.exports = {
  name: "two", // optional, falls back to object key
  description: "group two websites",
  options: {
    frequency: 60 * 23, // 24 hours
    // Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site"
  },
  urls: [
    "https://yummelier.com/",
    "https://yummelier.com/behind-the-scenes/"
  ]
};