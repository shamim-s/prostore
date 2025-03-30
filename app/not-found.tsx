import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src={"/images/logo.svg"}
        width={48}
        height={48}
        alt="Logo"
        priority={true}
      />
      <div className="p-6 rounded-lg text-center">
        <h1 className="text-3xl font bold mb-4">Page Not Found</h1>
        <p>Could not find requested page.</p>
        <Button variant={"outline"} className="mt-4 lm-2">
          <Link href={"/"}>Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Notfound;
