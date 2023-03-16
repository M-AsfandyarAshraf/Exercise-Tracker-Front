import Link from "next/link";
import Image from "next/image";
import '../app/globals.css';

const Navbar_Auth = () => {
  return (
      <ul className=" flex z-20 flex-row shadow-md w-full h-20 items-center px-10 sticky top-0 bg-white">
        <li className="basis-20">
        <Image src={"/../public/Logo.png"} width = {50} height={20} alt={"Exercise Logo"}></Image>
        </li>
        <li className=" basis-20 active:font-bold hover:text-orange-500">
          <Link href="/home">Home</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/profile">Profile</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/settings">Settings</Link>
        </li>
        <li className=" basis-20 hover:text-orange-500">
          <Link href="/signout">Sign Out</Link>
        </li>
        
      </ul>
  );
};

export default Navbar_Auth;