export default {
	env: process.env.ELEVENTY_ENV,
	title: "Bob Monsour",
	description:
		"The personal website of Bob Monsour. Enjoying building websites with 11ty.",
	url: "https://www.bobmonsour.com",
	locale: "en",
	author: {
		name: "Bob Monsour",
		email: "bob.monsour@gmail.com",
	},
	snow: "true",
	mainNavLinks: [
		{ url: "/", text: "Home" },
		{ url: "/blog/", text: "Blog" },
		{ url: "/notes/", text: "Notes" },
		{ url: "/books/", text: "Books" },
		{ url: "/about/", text: "About" },
	],
};
