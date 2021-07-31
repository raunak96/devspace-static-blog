import Link from "next/link";

const CategoryList = ({ categories, activeCategory }) => {
	return (
		<div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
			<h3 className="text-2xl bg-gray-700 text-white p-3 rounded">
				Blog Categories
			</h3>
			<ul className="divide-y divide-gray-300">
				{categories.map(category => (
					<Link
						key={category}
						href={`/blogs/category/${category.toLowerCase()}`}>
						<li
							className={`p-4 cursor-pointer rounded ${
								activeCategory === category.toLowerCase()
									? "bg-indigo-400 text-white font-bold"
									: "hover:bg-blue-50"
							}`}>
							{category}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default CategoryList;
