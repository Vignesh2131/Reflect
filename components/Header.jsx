import Link from "next/link"
import Image from "next/image"
import {
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import UserMenu from "./UserMenu";
import { Button } from "./ui/button";
import { FolderOpen, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
const Header = async () => {
  await checkUser();
  return (
    <div>
      <header className="container mx-auto">
        <nav className="py-6 px-8 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Reflect logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/dashboard#collections">
                <Button variant="outline" className="flex items-center gap-2">
                  <FolderOpen size={18} />
                  <span className="hidden md:inline">Collections</span>
                </Button>
              </Link>
            </SignedIn>
            <Link href="/journal/write">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Write now</span>
              </Button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header