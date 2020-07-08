module.exports = {
	personal: {
		name: "personal", // optional, falls back to object key
		description: "Personal web site",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site",
		},
		urls: [
			"https://joaopescada.com/",
			"https://joaopescada.com/works/",
			"https://joaopescada.com/articles/"
		]
	},
	yummelier: {
		name: "yummelier", // optional, falls back to object key
		description: "Yummelier sites",
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
	hosted: {
		name: "Hosted", // optional, falls back to object key
		description: "Hosted sites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://anaemiliasilva.com/",
			"https://filhosdelondres.com/",
			"https://temppo.com/",
			"https://ilustrique.com/",
			"http://milliaoz.com/",
			"https://suprasumo.co/",
			"https://mariabaixinha.com/"
		]
	}
};