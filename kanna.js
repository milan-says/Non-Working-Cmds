const axios = require('axios');

module.exports = {
	config: {
		name: "kanna",
		aliases: [""],
		version: "1.0",
		author: "milan-says",
		countDown: 5,
		role: 0,
		shortDescription: "Baby dragon is so cute",
		longDescription: "",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message, args }) {
		const BASE_URL = `https://apikanna.khoahoang3.repl.co`;
		try {
			let res = await axios.get(BASE_URL)
			let res2 = res.data
            let img = res2.url
			const form = {
			};
			if (img) {
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);

			}
			message.reply(form);
		} catch (e) { message.reply("Can't Provide You The Results") }

	}
};
