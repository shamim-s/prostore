import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href={"/"} className="flex-start">
          <Image
            src={"/images/logo.svg"}
            alt={`${APP_NAME}`}
            width={48}
            height={48}
            priority={true}
          />
          <span className="hidden text-bold lg:block text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
