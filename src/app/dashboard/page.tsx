import clsx from "clsx"
import { lusitana, spartan } from "../ui/fonts"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import DashNotes from "../ui/dashboard/dashboardnotes"
import { auth } from "../../../auth"
import { Session } from "next-auth"

export default async function Page() {
    return (
        <main>
            <h1 className={clsx(lusitana.className, 'flex text-2xl')}>Dashboard</h1>
            <DashNotes />
            {/* <div className="">
                <h2>Recent Notes</h2>
                <div className="dash-notes-container">
                    <div className="dashnote bg-gray-200 p-4 flex items-center gap-8 rounded">
                        <p>this is a note</p>
                        <p>04-10-2024</p>
                        <ArrowRightIcon className="w-6 ml-auto"/>
                    </div>
                </div>
            </div> */}

        </main>
    )
}