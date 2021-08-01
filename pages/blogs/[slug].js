import CategoryLabel from "components/CategoryLabel";
import Layout from "components/Layout";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
// import Image from "next/image";
import path from "path";
import marked from "marked";

const BlogPage = ({ frontmatter, content, slug }) => {
	const { title, category, date, cover_image, author, author_image } =
		frontmatter;
	return (
		<Layout title={`${title} - ${author}`}>
			<div className="mx-6">
				<Link href="/blogs">
					<a className="text-sky-500 hover:text-blue-600 font-medium text-lg flex items-center space-x-1">
						<span className="text-2xl">&#129044;</span>{" "}
						<p>Go Back</p>
					</a>
				</Link>
				<div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
					<div className="flex items-center justify-between mt-3">
						<h1 className="text-5xl mb-6">{title}</h1>
						<CategoryLabel>{category}</CategoryLabel>
					</div>
					<div className="w-full h-[650px] relative">
						<img
							src={cover_image}
							layout="fill"
							objectFit="cover"
							className="rounded"
							alt="Cover Image"
						/>
					</div>
					<div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2 mt-7">
						<div className="flex items-center space-x-3">
							<div className="h-10 w-10 relative hidden sm:block">
								<img
									src={author_image}
									layout="fill"
									objectFit="cover"
									className="rounded-full"
									alt="Author Image"
								/>
							</div>
							<h3 className="text-indigo-600 font-semibold">
								{author}
							</h3>
						</div>
						<p className="text-sm text-gray-600">{date}</p>
					</div>
					<div className="mt-4 blog-body">
						<div
							dangerouslySetInnerHTML={{
								__html: marked(content),
							}}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map(fileName => ({
		params: { slug: fileName.replace(".md", "") },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { data: frontmatter, content } = matter.read(
		path.join("posts", `${params.slug}.md`)
	);
	return {
		props: {
			frontmatter,
			content,
			slug: params.slug,
		},
	};
}

export default BlogPage;
