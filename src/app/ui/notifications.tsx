"use client"
import { useCallback, useEffect } from "react"

const sendNotification = () => {
    if("Notification" in window && Notification.permission === "granted") {
        new Notification("Hello Developers!", {
            body: "This is your notification message!",
            icon: "/h4logo.png"
        })
    }
}

export function useNotificationPermission() {

    const requestNotificationPermission = useCallback(() => {
        if("Notification" in window) {
            Notification.requestPermission().then(function (permission) {
                if(permission === "granted") {
                    console.log("Notification permisssion granted!")
                    sendNotification()
                }
            })
        }
    }, [])

    // useEffect(() => {
    //     if("Notification" in window) {
    //         requestNotificationPermission()
    //     }
    // }, [requestNotificationPermission])

    return requestNotificationPermission
}