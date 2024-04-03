"use client"
import { useState } from "react"
import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { Button } from "../button"
import { useFormState } from "react-dom"
// import { Clients } from "@/app/lib/definitions"
import { createWorkoutNote } from "@/app/lib/actions"

export default function Form() {
    const initialState = {message: null, error: {}}
    const [showForm, setShowForm] = useState(false)
    function handleClick() {
        setShowForm(prev => !prev)
    }
    return (
        <div className="mt-4 mb-8">
            {!showForm && <Button onClick={handleClick}>Add new note +</Button>}
            
            {showForm &&
            <form action={createWorkoutNote}>
                <div className="mb-4">
                    
                    <div className="relative flex flex-col">
                        <label htmlFor="user" className="mb-2 block text-sm font-medium">
                            User name
                        </label>
                            <input
                                id="user"
                                name="user"
                                type="text"
                                placeholder="user"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                            />
                            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
                        {/* <div className="relative w-1/2">
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Last name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                            />
                        </div> */}
                    </div>
                    
                    <div id="add-client-error">
                        {}
                    </div>

                    <div className="relative flex flex-col">
                        <label htmlFor="date" className="mb-2 block text-sm font-medium">
                            Date
                        </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                            />
                           
                        {/* <div className="relative w-1/2">
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Last name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                            />
                        </div> */}
                    </div>
                    
                    <div id="add-client-error">
                        {}
                    </div>
                    <label htmlFor="note" className="mb-2 block text-sm font-medium">
                        Note
                    </label>
                    <div className="flex">
                        <div className="relative w-full">
                            <textarea
                                id="note"
                                name="note"
                                placeholder="Note (optional)"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 w-full"
                            ></textarea>
                        </div>

                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <p onClick={handleClick} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                            Cancel
                        </p>
                        <Button type="submit">confirm and add note</Button>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}