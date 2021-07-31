import Link from "next/link";
import { useMemo } from "react";
import DoubleChev from "../icons/double-chev.svg";
import SingleChev from "../icons/single-chev.svg";

const Pagination = ({ isLast, currentPage, numberOfPages }) => {
	const { isFirst, prevRoute, nextRoute } = useMemo(
		() => ({
			isFirst: currentPage === 1,
			prevRoute: `/blogs/page/${currentPage - 1}`,
			nextRoute: `/blogs/page/${currentPage + 1}`,
		}),
		[currentPage]
	);

	return (
		numberOfPages > 1 && (
			<div className="flex items-center justify-between max-w-lg mx-auto mt-2 px-2">
				{/* 1st and Previous btn */}
				<div className="flex items-center space-x-2">
					<Link href="/blogs/page/1">
						<button
							disabled={isFirst}
							className="pagination-btn group">
							<DoubleChev
								fill={isFirst ? "white" : "#10b981"}
								className="group-hover:fill-current group-hover:text-white"
							/>
						</button>
					</Link>
					<Link href={prevRoute}>
						<button
							disabled={isFirst}
							className="pagination-btn group">
							<SingleChev
								fill={isFirst ? "white" : "#10b981"}
								className="group-hover:fill-current group-hover:text-white"
							/>
						</button>
					</Link>
				</div>

				<div className="flex items-center space-x-2">
					{Array.from({ length: numberOfPages }, (_, i) => (
						<Link
							href={
								currentPage === i + 1
									? `#`
									: `/blogs/page/${i + 1}`
							}
							key={i}>
							<button
								disabled={currentPage === i + 1}
								className={`pagination-btn group ${
									currentPage === i + 1 &&
									"pagination-btn-active !opacity-100"
								}`}>
								{i + 1}
							</button>
						</Link>
					))}
				</div>

				{/* Last and Next btn */}
				<div className="flex items-center space-x-2">
					<Link href={nextRoute}>
						<button
							disabled={isLast}
							className="pagination-btn group rotate-180">
							<SingleChev
								fill={isLast ? "white" : "#10b981"}
								className="group-hover:fill-current group-hover:text-white"
							/>
						</button>
					</Link>
					<Link href={`/blogs/page/${numberOfPages}`}>
						<button
							disabled={isLast}
							className="pagination-btn group rotate-180">
							<DoubleChev
								fill={isLast ? "white" : "#10b981"}
								className="group-hover:fill-current group-hover:text-white"
							/>
						</button>
					</Link>
				</div>
			</div>
		)
	);
};

export default Pagination;
