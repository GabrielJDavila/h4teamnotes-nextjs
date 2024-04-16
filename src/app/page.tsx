import Image from "next/image";
import { lusitana } from "./ui/fonts";
import Link from "next/link";
import LoginPage from "./login/page";
import { signIn } from "../../auth";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  return (
    <main>
      <p>Main page</p>
      <Link href="/login">
        <p>Login</p>
      </Link>
    </main>
  )
}
