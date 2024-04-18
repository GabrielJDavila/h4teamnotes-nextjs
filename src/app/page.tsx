import Image from "next/image";
import { lusitana, poppins, spartan, gothic, comfortaa } from "./ui/fonts";
import Link from "next/link";
import LoginPage from "./login/page";
import { signIn } from "../../auth";
import { redirect } from "next/dist/server/api-utils";
import clsx from "clsx";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <main className="text-blue-400 text-center w-4/5 h-3/4 m-auto flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0 rounded">
      {/* <h1 className={clsx(poppins.className, 'text-2xl font-bold')}>H4 Training</h1> */}
      <img src="h4logo.png"/>
      <h2 className={clsx(poppins.className, 'text-xl font-bold')}>Team Notes</h2>
      <Link href="/login" className="mt-4">
        <Button>Login</Button>
      </Link>
    </main>
  )
}
