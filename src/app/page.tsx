import Image from "next/image";
import { lusitana } from "./ui/fonts";
import Link from "next/link";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <main>
      <p>Main page</p>
      <LoginPage />
    </main>
  )
}
