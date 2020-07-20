module.exports = {
  name: "four", // optional, falls back to object key
  description: "group four websites",
  options: {
    frequency: 60 * 23, // 24 hours
    // Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run"
  },
  urls: [
    "https://anaemiliasilva.com/",
    "https://filhosdelondres.com/",
    "https://tidykingdom.com/",
    "http://milliaoz.com/"
  ]
};