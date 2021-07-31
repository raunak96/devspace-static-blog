import Link from "next/link";
import { useCallback } from "react";

const CategoryLabel = ({ children }) => {
	const colorKey = useCallback(() => {
		const colorCode = {
			javascript: "yellow",
			css: "blue",
			python: "green",
			php: "purple",
			ruby: "red",
		};
		return children.toLowerCase() in colorCode
			? `bg-${colorCode[children.toLowerCase()]}-600`
			: "bg-indigo-600";
	}, []);

	return (
		<div
			className={`px-2 py-1 text-gray-100 ${colorKey()} font-bold rounded`}>
			<Link href={`/blogs/category/${children.toLowerCase()}`}>
				{children}
			</Link>
		</div>
	);
};

export default CategoryLabel;
