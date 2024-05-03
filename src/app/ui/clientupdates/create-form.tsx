"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { Button } from "../button"
import { useFormState } from "react-dom"
// import { Clients } from "@/app/lib/definitions"
import { createClientUpdate } from "@/app/lib/actions"
import { useSession } from "next-auth/react"

export default function Form() {
    const initialState = {message: null, error: {}}
    const [showForm, setShowForm] = useState(false)
    const ref = useRef<HTMLFormElement>(null)
    const { data: session } = useSession()

    function handleClick() {
        setShowForm(prev => !prev)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        await createClientUpdate(formData)
        if(ref.current) {
            ref.current.reset()
        }
    }

    return (
        <div className="mt-4 mb-8">
            {!showForm && <Button onClick={handleClick}>Add new note +</Button>}
            
            {showForm &&
            <form ref={ref} onSubmit={handleSubmit}>
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
                                defaultValue={session?.user?.name || ""}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                                required
                            />
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
                                required
                            />
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
                                required
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