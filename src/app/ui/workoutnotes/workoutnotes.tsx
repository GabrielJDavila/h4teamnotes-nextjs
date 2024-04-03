import { fetchWorkoutNotes } from "@/app/lib/data";

export default async function WorkoutNotes() {
    const notes = await fetchWorkoutNotes()
    console.log(notes)
    return (
        <div>
            <div className="flex justify-between text-left m-4">
                <p className="w-1/3">Notes</p>
            </div>
            <div className="flex flex-col gap-4">
                {notes ? notes.map((note, index) => {
                    return (
                        <div key={note.id} className="bg-gray-100 p-4 flex flex-col gap-8">
                            <div className="flex flex-col text-left">
                                <h3>Note Title</h3>
                                <p>{note.username}</p>
                                <p>{note.date}</p>
                            </div>
                            <p>{note.note}</p>
                        </div>
                    )
                }): <p>No existing notes</p>
                }
            </div>
        </div>
    )
}