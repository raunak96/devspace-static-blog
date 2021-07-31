import fs from "fs";
import path from "path";
import Layout from "components/Layout";
import Post from "components/Post";
import { BLOGS_PER_PAGE } from "config";
import getPosts from "lib/getPosts";
import Pagination from "components/Pagination";

const BlogsPage = ({ posts, numberOfPages, hasMorePages, currentPage }) => {
	return (
		<Layout title={`Blogs - Page ${currentPage}`}>
			<h1 className="text-4xl border-b-4 p-5 mb-3">Blogs</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map(({ slug, ...post }) => (
					<Post key={slug} post={{ slug, ...post }} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				isLast={!hasMorePages}
				numberOfPages={numberOfPages}
			/>
		</Layout>
	);
};

export default BlogsPage;

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));
	const numberOfPages = Math.ceil(files.length / BLOGS_PER_PAGE);

	const paths = [];
	for (let i = 0; i < numberOfPages; i++) {
		paths.push({ params: { pageNumber: (i + 1).toString() } });
	}
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const pageNumber = parseInt(params?.pageNumber ?? 1);
	const files = fs.readdirSync(path.join("posts"));
	const numberOfPages = Math.ceil(files.length / BLOGS_PER_PAGE);

	const posts = getPosts();

	return {
		props: {
			posts: posts.slice(
				(pageNumber - 1) * BLOGS_PER_PAGE,
				pageNumber * BLOGS_PER_PAGE
			),
			numberOfPages,
			currentPage: pageNumber,
			hasMorePages: numberOfPages > pageNumber,
		},
	};
}
