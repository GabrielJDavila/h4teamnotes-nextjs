"use client"
import { useState } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { signOut } from "../../../../auth";


export default function NavMenu() {
    const [openNav, setOpenNav] = useState(false)

    function handleClick() {
        setOpenNav(prev => !prev)
    }

    return (
        <div className="flex h-full flex-col md:px-2 ml-auto md:hidden">
            <div className="w-full">
                <Bars2Icon onClick={handleClick} className="w-10 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded ml-auto mr-2 md:hidden"/>
                <div className={`fixed top-20 right-0 left-0 z-10 flex grow flex-col justify-between ${openNav ? "inline" : "hidden"} md:flex-col space-x-0 space-y-2 md:hidden px-2 bg-white w-full py-2 px-3 rounded`}>
                    <NavLinks />
                    {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
                </div>
            </div>
            
        </div>
    )
}