"use client"
import { useState } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";
import { Bars2Icon } from "@heroicons/react/24/outline";


export default function SideNav() {
    const [openNav, setOpenNav] = useState(false)

    function handleClick() {
        setOpenNav(prev => !prev)
    }

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Bars2Icon onClick={handleClick} className="w-10 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded ml-auto mr-2 md:hidden"/>
            <div className={`flex grow flex-col justify-between ${openNav ? "inline" : "hidden"} md:flex-col space-x-0 space-y-2 md:hidden mt-4 px-2`}>
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        Sign Out
                    </button>
                </form>
            </div>
            <div className={`hidden md:flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2`}>
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
    )
}