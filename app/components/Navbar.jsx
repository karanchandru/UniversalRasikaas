// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 sticky top-0 z-50 shadow-md text-[1.3vw]">
            <div className="container mx-auto flex justify-between items-center">
                {/* Add your logo here */}
                <div className="inline-flex items-center">
                    <div className="w-[10vh] inline-flex">
                        <Image src={logo} />
                    </div>
                    <h1>Universal Rasikaas</h1>
                </div>


                <ul className="flex space-x-6 text-black">
                    <li>
                        <Link href="/">
                            <p className="text-[1em]">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <p className="text-[1em]">About Me</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <p className="text-[1em]">Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicesApp">
                            <p className="text-[1em]">Services</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p className="text-[1em]">Contact Me</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
