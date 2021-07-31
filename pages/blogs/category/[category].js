import fs from "fs";
import path from "path";
import Layout from "components/Layout";
import Post from "components/Post";
import getPosts from "lib/getPosts";
import matter from "gray-matter";
import CategoryList from "components/CategoryList";

const CategoryPage = ({ posts, category, categories }) => {
	return (
		<Layout
			title={`${category[0].toUpperCase()}${category.slice(1)} | Blog`}>
			<div className="grid grid-cols-12 gap-x-3">
				<div className="col-span-7 md:col-span-9 xl:col-span-9">
					<h1 className="text-4xl border-b-4 p-5 mb-3">
						Blogs about {category[0].toUpperCase()}
						{category.slice(1)}
					</h1>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{posts.map(({ slug, ...post }) => (
							<Post key={slug} post={{ slug, ...post }} />
						))}
					</div>
				</div>
				<div className="col-span-5 md:col-span-3 xl:col-span-3 mr-2">
					<CategoryList
						categories={categories}
						activeCategory={category}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default CategoryPage;

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));
	const categories = new Set([
		...files.map(fileName => {
			const { data } = matter.read(path.join("posts", fileName));
			return data.category.toLowerCase();
		}),
	]);

	const paths = [...categories].map(category => ({ params: { category } }));

	return {
		paths: paths,
		fallback: false,
	};
}
export async function getStaticProps({ params: { category } }) {
	const posts = getPosts();
	const categories = [...new Set([...posts.map(post => post.category)])];
	const categoryPosts = posts.filter(
		post => post.category.toLowerCase() === category
	);
	return {
		props: { posts: categoryPosts, category, categories },
	};
}
