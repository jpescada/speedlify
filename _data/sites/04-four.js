module.exports = {
  name: "four", // optional, falls back to object key
  description: "group four websites",
  options: {
    frequency: 60 * 23, // 23 hours
    // if the sites don’t share assets on the same domain, we can reset
    // chrome with each run instead of each site in every run (it’s faster)
    freshChrome: "run"
  },
  urls: [
    "https://anaemiliasilva.com/",
    "https://filhosdelondres.com/",
    "https://tidykingdom.com/",
    "http://milliaoz.com/"
  ]
};