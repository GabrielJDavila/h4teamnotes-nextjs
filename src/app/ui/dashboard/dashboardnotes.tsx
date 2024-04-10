import { recentWorkoutNote, recentGymEventNote } from "@/app/lib/data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function DashNotes() {

    const workoutnote = await recentWorkoutNote()
    const gymeventnote = await recentGymEventNote()
    
    const [workoutYear, workoutMonth, workoutDay] = workoutnote.date.split("-")
    const workoutNoteFormattedDate = `${workoutMonth}-${workoutDay}-${workoutYear}`

    const [gymeventYear, gymeventMonth, gymeventDay] = gymeventnote.date.split("-")
    const gymNoteFormattedDate = `${gymeventMonth}-${gymeventDay}-${gymeventYear}`


    return (
        <div className="">
            <h2>Recent Notes</h2>
            <div className="dash-notes-container flex flex-col gap-4">
                <Link href={`/dashboard/${workoutnote.id}/edit`} className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                    <p>{workoutnote.username}</p>
                    <p>{workoutNoteFormattedDate}</p>
                    <ArrowRightIcon className="w-6 ml-auto"/>
                </Link>
                <Link href={`/dashboard/${workoutnote.id}/edit`} className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                    <p>{gymeventnote.username}</p>
                    <p>{gymNoteFormattedDate}</p>
                    <ArrowRightIcon className="w-6 ml-auto"/>
                </Link>
            </div>
        </div>  
    )
}