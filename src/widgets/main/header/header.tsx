import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import { Search, ShoppingBasket, User } from "lucide-react";
export default function Header() {
  return (
    <>
      <header className="flex justify-evenly my-4  items-center text-[#484848] ">
        <div>
          <Image alt="logo_bloom_beauty" src={logo} width={168} height={25} />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className=" hover:text-[#a3a2a2] " href={"/shopall"}>
                SHOP ALL
              </Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#a3a2a2] "  href={"/bestsellers"}>BESTSELLERS</Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#a3a2a2] "  href={"/collection"}>COLLECTION</Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#a3a2a2] "  href={"/aboutus"}>ABOUT US</Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#a3a2a2] "  href={"/blog"}>BLOG</Link>{" "}
            </li>
          </ul>
        </nav>
        <div className="flex space-x-3 justify-center items-center gap-4 ">
          <div className="flex flex-col justify-center items-center ">
            <Search className="w-6 h-6" />
            <p className="">SEARCH</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <User className="w-6 h-6" />
            <p>ACCOUNT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ShoppingBasket className="w-6 h-6" />
            <p>CART</p>
          </div>
        </div>
      </header>
    </>
  );
}
