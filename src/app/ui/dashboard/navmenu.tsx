"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { signOut } from "../../../../auth";
// import { useCallback, useEffect } from "react"
// import { requestNotificationPermission } from "../notifications";


export default function NavMenu() {
    const [openNav, setOpenNav] = useState(false)
    const menuRef = useRef<HTMLElement | null>(null)


    function handleClick() {
        setOpenNav(prev => !prev)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setOpenNav(false)
        }
    }

    // const sendNotification = () => {
    //     if("Notification" in window && Notification.permission === "granted") {
    //         new Notification("Hello Developers!", {
    //             body: "This is your notification message!",
    //             icon: "/h4logo.png"
    //         })
    //     }
    // }
    
    // const requestNotificationPermission = useCallback(() => {
    //     if("Notification" in window) {
    //         Notification.requestPermission().then(function (permission) {
    //             if(permission === "granted") {
    //                 console.log("Notification permisssion granted!")
    //                 sendNotification()
    //             }
    //         })
    //     }
    // }, [])
    
    // useEffect(() => {
    //     if("Notification" in window) {
    //         requestNotificationPermission()
    //     }
    // }, [requestNotificationPermission])

    document.addEventListener("click", handleClickOutside)

    return (
        <div className="flex h-full flex-col md:px-2 ml-auto md:hidden">
            <div className="w-full">
                <Bars2Icon onClick={handleClick} ref={menuRef as React.RefObject<SVGSVGElement>} className="w-10 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded ml-auto mr-2 md:hidden"/>
                <div className={`fixed top-20 right-0 left-0 z-10 flex grow flex-col justify-between ${openNav ? "inline" : "hidden"} md:flex-col space-x-0 space-y-2 md:hidden px-2 bg-white w-full py-2 px-3 rounded`}>
                    <NavLinks />
                    {/* <button onClick={requestNotificationPermission}>
                        Trigger Notification
                    </button> */}
                    {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
                </div>
            </div>
            
        </div>
    )
}