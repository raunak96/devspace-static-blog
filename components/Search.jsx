import { useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import SearchIcon from "../icons/search.svg";
import SearchResults from "./SearchResults";

const Search = () => {
	const searchRef = useRef(null);
	const [searchResult, setSearchResult] = useState([]);

	const getResults = useMemo(
		() =>
			debounce(async term => {
				const res = await fetch(`/api/search?q=${term.toLowerCase()}`);
				const results = await res.json();
				setSearchResult(results);
			}, 1000),
		[]
	);

	const handleChange = () => {
		if (searchRef.current.value === "") return setSearchResult([]);
		getResults(searchRef.current.value);
	};

	return (
		<div className="bg-gray-600 px-2 py-4 sm:px-4 relative">
			<div className="flex items-center justify-center md:justify-end">
				<div className="w-full md:w-1/3 flex justify-between items-center px-2 py-3 bg-gray-200 rounded-full mr-3 text-gray-600 text-sm focus-within:bg-white">
					<input
						ref={searchRef}
						type="search"
						placeholder="Search Posts..."
						className="outline-none bg-transparent flex-1"
						onChange={handleChange}
					/>
					<SearchIcon className="h-5 w-5" />
				</div>
			</div>
			{searchRef.current?.value && (
				<SearchResults results={searchResult} />
			)}
		</div>
	);
};

export default Search;
