---
title: Calculating reading time for a post
date: 2022-02-06
tags:
  - 11ty
description: Where does that '3 minutes to read' come from?
keywords: reading time, eleventy, filters
image:
  source: calculating-reading-time-for-a-post.jpg
  alt: a boy reading at sunset
  creditPerson: Aaron Burden
  creditLink: https://unsplash.com/@aaronburden
pageHasCode: true
rssid: dd013d5a19d3ca1a6f377ca6e49124ca
---

Where does that _'3 minutes to read'_ come from?

Each of the posts on this site (there are only two so far, and this is the second one), display something like "About 1 minute to read." This indicates that it will take about one minute to read the post.

I had seen that on other sites, inlcuding Medium, and I always thought it was kinda neat.

I was inspired to do two things. First, was there something out there in the eleventy world that already did this? And two, I was willing to use it as long as I could understand how it worked. Ok, three things...the third being that if I didn't understand how it worked, could I make it myself?

What you see on this site is the result of the third thing.

I did find one in the wild, [here](https://github.com/johanbrook/eleventy-plugin-reading-time). At first, I used it. I installed the plugin and set up my first post to use it and it looks like it works.

However, when I looked at the code, I didn't really understand it all. I know that if I spent the time, I could understand it. But I also thought back to another project that I started (but never finished) and the piece of code that it included that had one of the core elements of a reading time calculator, that is, counting the number of words in the post. I'll write separately about that other project some time (it involved creating a lightweight search engine for static sites).

So even though the plugin worked, I really wanted to try to make a simpler (in my mind) version of it. One that I could document and share...simply for the sake of learning and sharing (which, if you read my [Is this thing on?](https://www.bobmonsour.com/posts/is-this-thing-on/) post, you'd see that that's one of the purposes of this site.

So, now, I present to you my reading time calculator. The code is shown below and it can also be found at this [GitHub gist](https://gist.github.com/bobmonsour/53ea41c50bec94be394a9314858dad1d).

```js
/*
 * Calculate the reading time, in minutes, of a post
 *
 * Assumptions:
 * - average reading time is 240 words per minute
 *   source: https://bit.ly/3HCogSr, "Most Comprehensive
 *   Review To Date Finds The Average Person’s Reading
 *   Speed Is Slower Than Previously Thought"
 *
 * Output:
 * - reading time is rounded to the nearest minute
 * - in the case of less than 1 minute, reading time is
 *   displayed as "less than a minute"
 *
 * @param {String} text
 */

module.exports = function (text) {
	var content = new String(text);
	const speed = 240; // reading speed in words per minute

	// remove all html elements
	var re = /(&lt;.*?&gt;)|(<[^>]+>)/gi;
	var plain = content.replace(re, "");

	// replace all newlines and 's with spaces
	var plain = plain.replace(/\s+|'s/g, " ");

	// create array of all the words in the post & count them
	var words = plain.split(" ");
	var count = words.length;

	// calculate the reading time
	var readingTime = Math.round(count / speed);
	if (readingTime === 0) {
		return "Less than 1 minute to read";
	} else if (readingTime === 1) {
		return "1 minute to read";
	} else {
		return readingTime + " minutes to read";
	}
};
```

I set it up as an eleventy filter by adding this to my .eleventy.js file:

```js
// Add filter to generate reading time for a post
eleventyConfig.addFilter(
	"readingTime",
	require("../../config/filters/readingtime.js")
);
```

Example usage if you're looping over a set of blog posts:

```jinja2 {% raw %}
{{ content | readingTime }}
{% endraw %}
```

<p class="strikethrough">I would have liked to have used similar syntax highlighting for the above line, but I couldn't figure out how to do that. While I am using the 11ty syntax highlighting plugin for the other code elements, I am using both nunjucks and markdown as template engines for markdown files. Nunjucks processes first and generates a reading time result. As a result, I dropped back and used the nunjucks raw tag instead.</p>

The reason that I place the readingtime.js filter file under my \_includes directory is so that I can include the exact code in the very blog post that you're reading now. That way, if the code changes, so does this post.

I'm not sure if this is worth taking any further as it suits my purposes of being simple, lightweight, and understandable (to me, at least).

> _UPDATE:_ I have since found a second implementation. It's listed among the [community-contributed plugins](https://www.11ty.dev/docs/plugins/) on the eleventy docs site. [This one](https://github.com/JKC-Codes/eleventy-plugin-time-to-read) has a lot more features than I need and I found it to be more complex (not always a bad thing, but it does far more than I need).
