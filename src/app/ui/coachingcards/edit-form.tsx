"use client"
import { useState } from "react"
import { Clients } from "@/app/lib/definitions"
import { Button } from "../button"
import { UserCircleIcon, PencilSquareIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import { updateClient, deleteClient } from "@/app/lib/actions"
import Link from "next/link"

export default function EditClientCard({clientinfo}: {clientinfo: Clients}) {
    const [openEdit, setOpenEdit] = useState(false)
    const [openDeleteModal, setopenDeleteModal] = useState(false)
    const updateClientCard = updateClient.bind(null, clientinfo.id)
    const deleteClientCard = deleteClient.bind(null, clientinfo.id)

    function handleOpenDeleteModal() {
        setopenDeleteModal(prev => !prev)
    }

    function handleEditView() {
        setOpenEdit(prev => !prev)
    }
    
    return (
        <div className="relative">
            {!openEdit ?
            <div>
                <div className="mb-4 flex flex-col gap-4">
                    <div>
                        <h3 className="mb-2 block text-sm font-medium">Client name</h3>
                        <div className="flex gap-8">
                            <div className="relative w-1/2">
                                <p className="peer w-full block border-b border-gray-200 py-2 pl-10 text-sm">
                                    First name: {clientinfo.firstname}</p>
                                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                            <div className="relative w-1/2">
                                <p className="peer w-full block border-b border-gray-200 py-2 pl-10 text-sm">
                                    Last name: {clientinfo.lastname}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 block text-sm font-medium">Client info</h3>
                        <div className="flex gap-8">
                            <div className="relative w-1/2">
                                <p className="peer block w-full border-b border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500">
                                    Age: {clientinfo.age} yrs
                                </p>
                            </div>
                            <div className="relative w-1/2">
                                <p className="peer block w-full border-b border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500">
                                    Weight: {clientinfo.weight} lbs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 block text-sm font-medium">Note</h3>
                        <div className="flex">
                            <div className="relative w-full">
                                <p className="resize-none peer block w-full rounded-md border bg-gray-200 border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 h-100">
                                    {clientinfo.note ? clientinfo.note : "no note available"}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end gap-4">
                        <Link
                            href="/dashboard/coachingcards"
                            className="flex gap-2 h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            <ArrowUturnLeftIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"/>
                            Back
                        </Link>
                        <Button className="gap-2" onClick={handleEditView}>
                            Edit
                            <PencilSquareIcon className="h-[18px] w-[18px] text-white-100 peer-focus:text-gray-900"/>
                        </Button>
                    </div>
                </div>
            </div>
            :
            <form action={updateClientCard} >
                <input type="hidden" name="id" defaultValue={clientinfo.id} />
                <div className="mb-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="firstname" className="mb-2 block text-sm font-medium">
                            Client name
                        </label>
                        <div className="flex gap-4">
                            <div className="relative w-1/2">
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder="First name"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={clientinfo.firstname}
                                    aria-describedby="add-client-error"
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
                                    defaultValue={clientinfo.lastname}
                                    aria-describedby="add-client-error"
                                />
                            </div>
                        </div>
                    </div>
                        
                    <div id="add-client-error">
                        {}
                    </div>

                    <div>
                        <label htmlFor="age" className="mb-2 block text-sm font-medium">
                            Client info
                        </label>
                        <div className="flex gap-4">
                            <div className="relative w-1/2">
                                <input
                                    id="age"
                                    name="age"
                                    type="text"
                                    placeholder="Age"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={clientinfo.age}
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
                                    defaultValue={clientinfo.weight}
                                    aria-describedby="add-client-error"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="note" className="mb-2 block text-sm font-medium">
                                Note
                        </label>
                        <div className="flex">
                            <div className="relative w-full">
                                <textarea
                                    id="note"
                                    name="note"
                                    placeholder="Note (optional)"
                                    className="resize-none peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 h-100"
                                    defaultValue={clientinfo.note}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                        
                    {/* <div id="add-client-error">
                        {}
                    </div> */}
                    <div className="mt-6 flex justify-end gap-4">
                        <button
                            onClick={handleEditView}
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <p onClick={handleOpenDeleteModal} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                            Delete
                        </p>
                        <Button type="submit">Confirm edit</Button>
                    </div>
                </div>
            </form>
            }
            {openDeleteModal &&
                <form action={deleteClientCard} className="absolute z-20 h-44 border border-gray-200 bg-white p-8 text-center flex flex-col items-center gap-4 top-0 bottom-0 right-0 left-0 shadow-lg rounded-lg m-auto">
                    <div className="m-auto text-center flex flex-col items-center gap-8">
                        <h2>{`Are you sure you want to delete ${clientinfo.firstname} ${clientinfo.lastname}'s card?`}</h2>
                        <div className="flex text-center items-center gap-4">
                            <p onClick={handleOpenDeleteModal} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                                Cancel
                            </p>
                            <Button>Confirm</Button>
                        </div>
                    </div>
                </form>
            }
            {openDeleteModal &&
                <div className="absolute h-screen bg-white z-10 top-0 bottom-0 right-0 left-0"></div>
            }
        </div>
    )
}