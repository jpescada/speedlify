module.exports = {
	one: {
		name: "one", // optional, falls back to object key
		description: "group one websites",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site",
		},
		urls: [
			"https://joaopescada.com/",
			"https://joaopescada.com/works/",
			"https://joaopescada.com/articles/",
			"https://joaopescada.com/about/"
		]
	},
	two: {
		name: "two", // optional, falls back to object key
		description: "group two websites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "site"
		},
		urls: [
			"https://yummelier.com/",
			"https://yummelier.com/behind-the-scenes/"
		]
	},
	three: {
		name: "three", // optional, falls back to object key
		description: "group three websites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://suprasumo.co/",
			"https://temppo.com/"
		]
	},
	four: {
		name: "four", // optional, falls back to object key
		description: "group four websites",
		options: {
			frequency: 60 * 24, // 24 hours
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
	},
	five: {
		name: "five", // optional, falls back to object key
		description: "group five websites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://ilustrique.com/",
			"https://mariabaixinha.com/",
			"https://catarinacoelho.pt/"
		]
	}
};