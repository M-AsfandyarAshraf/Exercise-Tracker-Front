import Link from "next/link";
import Image from "next/image";
import '../app/globals.css';

const Navbar = () => {
  return (
      <ul className=" flex z-10 flex-row shadow-md w-full h-20 items-center px-10 sticky top-0 bg-white">
        <li className="basis-20">
        <Image src={"/Logo.png"} width = {50} height={20} alt={"Exercise Logo"}></Image>
        </li>
        <li className=" basis-20 active:font-bold hover:text-orange-500">
          <Link href="/">Home</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/login">Login</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/signup">Sign Up</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/about">About</Link>
        </li>
        
      </ul>
  );
};

export default Navbar;