import { recentWorkoutNote, recentGymEventNote, recentClientUpdate } from "@/app/lib/data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { comfortaa, poppins } from "../fonts";
import clsx from "clsx";

export default async function DashNotes() {

    const workoutnote = await recentWorkoutNote()
    const gymeventnote = await recentGymEventNote()
    const clientupdatenote = await recentClientUpdate()
    console.log(clientupdatenote)
    // const newclient = await recentlyAddedClient()
    
    const [workoutYear, workoutMonth, workoutDay] = workoutnote.date.split("-")
    const workoutNoteFormattedDate = `${workoutMonth}-${workoutDay}-${workoutYear}`

    const [gymeventYear, gymeventMonth, gymeventDay] = gymeventnote.date.split("-")
    const gymNoteFormattedDate = `${gymeventMonth}-${gymeventDay}-${gymeventYear}`

    const [clientUpdateYear, clientUpdateMonth, clientUpdateDay] = clientupdatenote.date.split("-")
    const clientUpdateFormattedDate = `${clientUpdateMonth}-${clientUpdateDay}-${clientUpdateYear}`


    return (
        <div className="mt-12">

            <h2 className={clsx(comfortaa.className, 'flex text-md border-b-2 border-gray-200 mb-2')}>Recent Client Updates</h2>
            <div className="dash-notes-container flex flex-col gap-4">
                <Link href={`/dashboard/${clientupdatenote.id}/edit`} className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                    <p>{clientupdatenote.username}</p>
                    <p>{clientUpdateFormattedDate}</p>
                    <ArrowRightIcon className="w-6 ml-auto"/>
                </Link>
            </div>

            <h2 className={clsx(comfortaa.className, 'flex text-md border-b-2 border-gray-200 mb-2 mt-8')}>Recent Workout Notes</h2>
            <div className="dash-notes-container flex flex-col gap-4">
                <Link href={`/dashboard/${workoutnote.id}/edit`} className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                    <p>{workoutnote.username}</p>
                    <p>{workoutNoteFormattedDate}</p>
                    <ArrowRightIcon className="w-6 ml-auto"/>
                </Link>
            </div>
            <h2 className={clsx(comfortaa.className, 'flex text-md border-b-2 border-gray-200 mb-2 mt-8')}>Recent Event Notes</h2>
            <div className="dash-notes-container flex flex-col gap-4">
                <Link href={`/dashboard/${gymeventnote.id}/edit`} className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                    <p>{gymeventnote.username}</p>
                    <p>{gymNoteFormattedDate}</p>
                    <ArrowRightIcon className="w-6 ml-auto"/>
                </Link>
            </div>
            
        </div>  
    )
}