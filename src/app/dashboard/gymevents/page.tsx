import Form from "@/app/ui/gymevents/create-form"
import GymEventsNotes from "@/app/ui/gymevents/gymeventsnotes"
import { fetchGymEventsNotesPages } from "@/app/lib/data"
import Pagination from "@/app/ui/coachingcards/pagination"
import clsx from "clsx"
import { lusitana } from "@/app/ui/fonts"

export default async function Page({ searchParams, }: { searchParams?: {query?: string, page?: string} }) {

    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchGymEventsNotesPages(query)

    return (
        <main>
            <h1 className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>Gym Events</h1>
            <Form />
            <GymEventsNotes query={query} currentPage={currentPage} />
            <Pagination totalPages={totalPages} />
        </main>
    )
}