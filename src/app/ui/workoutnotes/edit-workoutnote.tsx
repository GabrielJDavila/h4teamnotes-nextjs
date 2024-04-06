"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowUturnLeftIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import { Button } from "../button"
import { useFormState } from "react-dom"
import { createWorkoutNote, updateWorkoutNote, deleteWorkoutNote } from "@/app/lib/actions"
import { Notes } from "@/app/lib/definitions"

export default function Form({workoutnote}: {workoutnote: Notes}) {
    const initialState = {message: null, error: {}}
    const [openEdit, setOpenEdit] = useState(false)
    const [openDeleteModal, setopenDeleteModal] = useState(false)

    const updateNoteCard = updateWorkoutNote.bind(null, workoutnote.id)
    const deleteNoteCard = deleteWorkoutNote.bind(null, workoutnote.id)

    function handleOpenDeleteModal() {
        setopenDeleteModal(prev => !prev)
    }

    function handleEditView() {
        setOpenEdit(prev => !prev)
    }
    return (
        <div className="mt-4 mb-8 relative">
            
            {!openEdit ?
            <div>
                <div className="mb-4">
                    
                    <div className="relative flex flex-col">
                        <h3 className="mb-2 block text-sm font-medium">
                            Logged by
                        </h3>
                            <p className="peer block w-full rounded-md border-b border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500">
                                {workoutnote.username}
                            </p>
                    </div>
                    
                    <div id="add-client-error">
                        {}
                    </div>

                    <div className="relative flex flex-col">
                        <h3>
                            Date
                        </h3>
                            <p className="peer block w-full rounded-md border-b border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500">
                                {workoutnote.date}
                            </p>
                    </div>
                    
                    <div id="add-client-error">
                        {}
                    </div>
                    <h3 className="mb-2 block text-sm font-medium">
                        Note
                    </h3>
                    <div className="flex">
                        <div className="relative w-full">
                            <p className="peer block w-full rounded-md border border-gray-200 p-4 pl-10 outline-2 placeholder:text-gray-500 w-full bg-gray-200">
                                {workoutnote.note}
                            </p>
                        </div>

                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <Link
                            href="/dashboard/workoutnotes"
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
            </div> :
            <form action={updateNoteCard}>
                <div className="mb-4">
                    <div className="relative flex flex-col">
                        <label htmlFor="user" className="mb-2 block text-sm font-medium">
                            Logged by
                        </label>
                            <input
                                id="user"
                                name="user"
                                type="text"
                                defaultValue={workoutnote.username}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
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
                                defaultValue={workoutnote.date}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="add-client-error"
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
                                defaultValue={workoutnote.note}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 w-full"
                            ></textarea>
                        </div>

                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <p onClick={handleEditView} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                            Cancel
                        </p>
                        <p onClick={handleOpenDeleteModal} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                            Delete
                        </p>
                        <Button type="submit">confirm</Button>
                    </div>
                </div>
            </form>
            }
            {openDeleteModal &&
                <form action={deleteNoteCard} className="absolute border border-gray-200 bg-white p-8 text-center flex flex-col items-center gap-4 top-0 bottom-0 right-0 left-0 shadow-lg rounded-lg">
                    <h2>Confirm Deletion</h2>
                    <p>Are you sure you want to delete this note?</p>
                    <div className="flex items-center gap-4">
                        <p onClick={handleOpenDeleteModal} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                            Cancel
                        </p>
                        <Button type="submit">confirm</Button>
                    </div>
                </form>
            }
        </div>
    )
}