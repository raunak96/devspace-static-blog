import getPosts from "lib/getPosts";

export default async function handler(req, res) {
	let posts = [];
	const searchTerm = req.query.q;
	if (process.env.NODE_ENV === "production") {
		// Fetch from cache as for static site api runs as serverless fn and cannot read/write to/from files
		const { posts: cachedPosts } = await import("../../cache/data");
		posts = cachedPosts;
	} else {
		posts = getPosts();
	}
	const results = posts.filter(
		({ title, category, excerpt }) =>
			title.toLowerCase().includes(searchTerm) ||
			excerpt.toLowerCase().includes(searchTerm) ||
			category.toLowerCase().includes(searchTerm)
	);
	res.status(200).json(results);
}
