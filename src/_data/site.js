module.exports = {
	env: process.env.ELEVENTY_ENV,
	title: "Bob Monsour",
	description:
		"The personal website of Bob Monsour. Enjoying learning and deploying websites with 11ty and Netlify.",
	url: "https://www.bobmonsour.com",
	locale: "en",
	author: {
		name: "Bob Monsour",
		email: "bob.monsour@gmail.com",
	},
	snow: "true",
	mainNavLinks: [
		{ url: "/", text: "Home" },
		{ url: "/archive/", text: "Blog" },
		{ url: "/microblog/", text: "microBlog" },
		{ url: "/about/", text: "About" },
	],
};
