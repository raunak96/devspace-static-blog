import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<Layout title="Page Not Found">
			<div className="flex flex-col items-center justify-center mt-20 overflow-hidden">
				<Image
					src="/images/error.jpg"
					height={200}
					width={200}
					className="rounded-full opacity-80"
				/>
				<h1 className="text-6xl my-5">Whoops!</h1>
				<h2 className="text-4xl text-gray-400 mb-5">
					This page does not exist
				</h2>
				<Link href="/">
					<a className="text-lg text-blue-400 hover:text-blue-500">
						Go Back to Home
					</a>
				</Link>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
