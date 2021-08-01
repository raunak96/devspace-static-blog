const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postData = () => {
	const files = fs.readdirSync(path.join("posts"));
	const posts = files.map(fileName => {
		const slug = fileName.replace(".md", "");
		const { data: frontmatter } = matter.read(path.join("posts", fileName));
		return { slug, ...frontmatter };
	});
	return `export const posts = ${JSON.stringify(posts)}`;
};

try {
	fs.readdirSync("cache");
} catch (error) {
	fs.mkdirSync("cache");
}

fs.writeFileSync("cache/data.js", postData(), err => {
	if (err) return console.log(err);
	console.log("Posts Cached...");
});
