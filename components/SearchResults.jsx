import Post from "./Post";

const SearchResults = ({ results }) => {
	return (
		<div className="search-modal absolute top-20 right-1/2 translate-x-1/2 md:right-2 md:translate-x-0 w-3/4 md:w-1/2 lg:w-2/5 z-40 border-4 border-gray-300 border-r-0  bg-white text-black rounded-2xl h-auto max-h-[500px] overflow-y-auto">
			<div className="p-10">
				<h2 className="text-2xl mb-2">
					{results.length} Result{results.length !== 1 && "s"}
				</h2>
				{results.map(post => (
					<Post key={post.slug} post={post} compact />
				))}
			</div>
		</div>
	);
};

export default SearchResults;
