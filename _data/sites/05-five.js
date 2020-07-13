module.exports = {
  name: "five", // optional, falls back to object key
  description: "group five websites",
  options: {
    frequency: 60 * 23, // 23 hours
    // if the sites don’t share assets on the same domain, we can reset
    // chrome with each run instead of each site in every run (it’s faster)
    freshChrome: "run"
  },
  urls: [
    "https://ilustrique.com/",
    "https://mariabaixinha.com/",
    "https://catarinacoelho.pt/"
  ]
};