import Form from "@/app/ui/gymevents/create-form"
import GymEventsNotes from "@/app/ui/gymevents/gymeventsnotes"
import { fetchGymEventsNotesPages } from "@/app/lib/data"
import Pagination from "@/app/ui/coachingcards/pagination"

export default async function Page({ searchParams, }: { searchParams?: {query?: string, page?: string} }) {

    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchGymEventsNotesPages(query)

    return (
        <main>
            <p>Gym Events</p>
            <Form />
            <GymEventsNotes query={query} currentPage={currentPage} />
            <Pagination totalPages={totalPages} />
        </main>
    )
}