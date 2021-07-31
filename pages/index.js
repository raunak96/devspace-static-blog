import Layout from "components/Layout";
import Link from "next/link";
import Post from "components/Post";
import getPosts from "lib/getPosts";

const HomePage = ({ posts }) => {
	return (
		<Layout>
			<h1 className="text-4xl border-b-4 p-5 mb-3">Latest Posts</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map(({ slug, ...post }) => (
					<Post key={slug} post={{ slug, ...post }} />
				))}
			</div>
			<div className="flex justify-center">
				<Link href="/blogs">
					<button className="w-1/3 px-4 py-3 my-5 border border-gray-500 text-gray-800 rounded-md outline-none focus:ring focus:ring-gray-200 select-none hover:text-white hover:bg-gray-900 transition duration-300 ease-in">
						All Posts
					</button>
				</Link>
			</div>
		</Layout>
	);
};

export default HomePage;

export async function getStaticProps(context) {
	const posts = getPosts();
	return {
		props: { posts: posts.slice(0, 6) },
	};
}
