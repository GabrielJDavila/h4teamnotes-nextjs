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
    const [showForm, setShowForm] = useState(false)
    // const ref = useRef<HTMLFormElement>(null)

    function handleClick() {
        setShowForm(prev => !prev)
    }

    // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     await createClient(formData)
    //     if(ref.current) {
    //         ref.current.reset()
    //     }
    // }
    
    return (
        <div className="mt-4 mb-8">
            {!showForm && <Button onClick={handleClick}>Add client +</Button>}
            
            {showForm &&
            <form action={createClient}>
                <div className="mb-4">
                    <label htmlFor="firstname" className="mb-2 block text-sm font-medium">
                        Client name
                    </label>
                    <div className="flex">
                        <div className="relative w-1/2">
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="First name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                                required
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-1/2">
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Last name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                                required
                            />
                        </div>
                    </div>
                    
                    <div id="add-client-error">
                        {}
                    </div>

                    <label htmlFor="age" className="mb-2 block text-sm font-medium">
                        Client info
                    </label>
                    <div className="flex">
                        <div className="relative w-1/2">
                            <input
                                id="age"
                                name="age"
                                type="text"
                                placeholder="Age"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-age-error"
                            />
                        </div>
                        <div className="relative w-1/2">
                            <input
                                id="weight"
                                name="weight"
                                type="text"
                                placeholder="Weight"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
                            />
                        </div>
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
                        <Button type="submit">confirm add client</Button>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}