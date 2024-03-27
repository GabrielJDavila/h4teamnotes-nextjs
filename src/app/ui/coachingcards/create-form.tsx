"use client"
import { useState } from "react"
import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { Button } from "../button"
import { useFormState } from "react-dom"
import { Clients } from "@/app/lib/definitions"
import { createClient } from "@/app/lib/actions"

export default function Form() {
    const initialState = {message: null, error: {}}
    // const [state, dispatch] = useFormState(createClient, initialState)
    const [showForm, setShowForm] = useState(false)
    function handleClick() {
        setShowForm(prev => !prev)
    }
    console.log(showForm)
    return (
        <div>
            <Button onClick={handleClick}>{!showForm ? "Add client +" : "X"}</Button>
            {showForm &&
            <form>
                <div className="mb-4">
                    {/* <label htmlFor="addclient" className="mb-2 block text-sm font-medium">
                        Add client
                    </label> */}
                    <div className="relative">
                        <input
                            id="clientid"
                            name="name"
                            type="text"
                            placeholder="Enter new client"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="add-client-error"
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="add-client-error">
                        {}
                    </div>
                    <Button type="submit">confirm add client</Button>
                </div>
            </form>
            }
        </div>
    )
}