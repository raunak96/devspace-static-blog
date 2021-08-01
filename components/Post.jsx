import CategoryLabel from "./CategoryLabel";
import Link from "next/link";
// import Image from "next/image";

const Post = ({ post }) => {
	return (
		<div className="px-7 py-6 bg-white shadow-md rounded-md my-4 border border-gray-200 mx-2">
			<img
				src={post.cover_image}
				width={600}
				height={420}
				className="rounded"
				alt="Cover Image"
			/>
			<div className="flex justify-between items-center mt-3">
				<span className="font-light text-gray-600 text-sm">
					{post.date}
				</span>
				<CategoryLabel>{post.category}</CategoryLabel>
			</div>
			<div className="mt-2">
				<Link href={`/blogs/${post.slug}`}>
					<a className="text-2xl text-gray-700 font-bold hover:underline">
						{post.title}
					</a>
				</Link>
				<p className="mt-2 text-gray-600">{post.excerpt}</p>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<Link href={`/blogs/${post.slug}`}>
					<a className="text-gray-500 hover:text-blue-600">
						Read More
					</a>
				</Link>
				<div className="sm:flex items-center">
					<div className="h-10 w-10 relative hidden sm:block mr-4">
						<img
							src={post.author_image}
							alt={post.author}
							className="rounded-full"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<h3 className="text-gray-700 font-bold">{post.author}</h3>
				</div>
			</div>
		</div>
	);
};

export default Post;
