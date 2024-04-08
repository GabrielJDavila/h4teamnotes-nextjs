import { fetchGymEventsNotes } from "@/app/lib/data";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function GymEventsNotes() {
    const notes = await fetchGymEventsNotes()
    const maxChars = 125
    console.log(notes)
    return (
        <div>
            <div className="flex justify-between text-left m-4">
                <p className="w-1/3">Notes</p>
            </div>
            <div className="flex flex-col gap-4">
                {notes ? notes.map((note, index) => {
                    const [year, month, day] = note.date.split("-")
                    const formattedDate = `${month}-${day}-${year}`
                    const truncatedText = note.note.length > maxChars ? note.note.substring(0, maxChars) + "..." : note.note
                    return (
                        <div key={note.id} className="bg-gray-100 p-4 flex flex-col gap-8 rounded-md">
                            <div className="flex justify-between">
                                <div className="flex flex-col text-left">
                                    <h3>Note Title</h3>
                                    <p>{note.username}</p>
                                    <p>{formattedDate}</p>
                                </div>
                                <Link href={`/dashboard/workoutnotes/${note.id}/edit`} className="flex gap-2 items-center rounded-lg p-2 cursor-pointer transition-colors hover:bg-gray-200">
                                    <p className="text-sm">View / Edit</p>
                                    <EyeIcon className="h-[20px] w-[20px] text-white-100 peer-focus:text-gray-900"/>
                                </Link>
                                
                            </div>
                            <p>{truncatedText}</p>
                        </div>
                    )
                }): <p>No existing notes</p>
                }
            </div>
        </div>
    )
}