import Image from "next/image";
import { lusitana } from "./ui/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Main page</p>
      <Link href="/dashboard">Login</Link>
    </main>
  )
}
