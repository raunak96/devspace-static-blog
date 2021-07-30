import Layout from "components/Layout";

const AboutPage = () => {
	return (
		<Layout title="About DevSpace">
			<div className="max-w-xl mx-auto">
				<h1 className="text-5xl font-bold border-b-2 border-blue-200 pb-5">
					About
				</h1>
				<div className="bg-[#f5f5f5] shadow-md px-8 py-3 mt-10 rounded-lg text-gray-600">
					<h3 className="text-2xl mb-5">DevSpace Blog</h3>
					<p className="mb-3 text-gray-700">
						This is a static blog site built with NextJs and
						Markdown
					</p>
					<p className="font-bold">Version 1.0.1</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
