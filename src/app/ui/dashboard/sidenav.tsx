
import Link from "next/link";
import NavLinks from "./nav-links";
import { Bars2Icon, UserIcon, PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "../../../../auth";
import NavMenu from "./navmenu";
import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../../../auth";
import SignOutBtn from "./signoutbtn";
import { useState } from "react";

export default async function SideNav({children}: {children: React.ReactNode}) {
    const session = await auth()
    
    // const [openNav, setOpenNav] = useState(false)

    // function handleClick() {
    //     setOpenNav(prev => !prev)
    // }
    // const session = await auth()
  
    return (
      <div>
        <div className="hidden h-full flex-col px-3 py-4 md:px-2 md:flex">
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <p className="mb-4">
              {session?.user?.name || ""}
            </p>
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            {children}
          </div>
        </div>
        <div className="fixed w-full flex flex-row px-3 py-4 md:px-2 md:hidden bg-white z-30 shadow-lg items-center">
          <p>
            {session?.user?.name || ""}
          </p>
          <NavMenu />
          {children}
        </div>
      </div>
      );
    // return (
    //     <div className="flex h-full flex-col bg-white px-3 py-4 md:px-2">
    //         {/* <div className="flex flex-row fixed justify-items-end w-full pr-4 ">
    //             <NavMenu />
    //             <UserIcon className="w-10 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded mr-2 md:hidden"/>
    //         </div> */}
            
    //         {/* <Bars2Icon onClick={handleClick} className="w-10 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded ml-auto mr-2 md:hidden"/> */}
    //         <div className={`flex grow flex-col justify-between ${openNav ? "inline" : "hidden"} md:flex-col space-x-0 space-y-2 md:hidden mt-4 px-2`}>
    //             <NavLinks />
    //             <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //             <form>
    //                 <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //                     Sign Out
    //                 </button>
    //             </form>
    //         </div>
    //         <div className={`hidden md:flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2`}>
    //             <NavLinks />
    //             <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //             <form
    //                 // action={async () => {
    //                 //     'use server'
    //                 //     await signOut()
    //                 // }}
    //             >
    //                 <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //                     Sign Out
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // )
}