import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
			<div className="container mx-auto p-5 flex flex-col md:flex-row items-center flex-wrap justify-between">
				<Link href="/">
					<a className="flex items-center font-medium mb-4 md:mb-0">
						<div className="h-10 w-10 relative">
							<Image
								src="/images/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<span className="ml-3 text-xl">DevSpace</span>
					</a>
				</Link>
				<ul className="flex flex-wrap items-center space-x-4">
					<li>
						<Link href="/blogs">
							<a className="nav-link">Blogs</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
