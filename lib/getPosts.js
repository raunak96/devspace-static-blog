import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sortbyDate } from "utils/";

const getPosts = () => {
	const files = fs.readdirSync(path.join("posts"));
	const posts = files.map(fileName => {
		const slug = fileName.replace(".md", "");
		const { data: frontmatter } = matter.read(path.join("posts", fileName));
		return { slug, ...frontmatter };
	});

	return posts.sort(sortbyDate);
};

export default getPosts;
