import fs from "fs";
import path from "path";
import Layout from "components/Layout";
import matter from "gray-matter";
import Post from "components/Post";
import { sortbyDate } from "utils";

const BlogsPage = ({ posts }) => {
	return (
		<Layout title="All Blogs">
			<h1 className="text-4xl border-b-4 p-5 mb-3">Blogs</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map(({ slug, ...post }) => (
					<Post key={slug} post={{ slug, ...post }} />
				))}
			</div>
		</Layout>
	);
};

export default BlogsPage;

export async function getStaticProps(context) {
	const files = fs.readdirSync(path.join("posts"));

	const posts = files.map(fileName => {
		const slug = fileName.replace(".md", "");
		const { data: frontmatter } = matter.read(path.join("posts", fileName));
		return { slug, ...frontmatter };
	});
	return {
		props: { posts: posts.sort(sortbyDate) },
	};
}
