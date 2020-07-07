module.exports = {
	joaopescada: {
		name: "joaopescada", // optional, falls back to object key
		description: "Personal web site",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site",
		},
		urls: [
			"https://joaopescada.com/",
			"https://joaopescada.com/agencies/",
			"https://joaopescada.com/startups/",
			"https://joaopescada.com/products/",
			"https://joaopescada.com/works/",
			"https://joaopescada.com/articles/",
			"https://joaopescada.com/about/",
			"https://joaopescada.com/contact/",
			"https://joaopescada.com/reading/"
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
	terabox: {
		name: "terabox", // optional, falls back to object key
		description: "Terabox hosted sites",
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
			"https://milliaoz.com/",
			"https://suprasumo.co/",
			"https://mariabaixinha.com/"
		]
	}
};