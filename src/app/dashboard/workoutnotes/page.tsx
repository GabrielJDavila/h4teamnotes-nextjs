import Form from "@/app/ui/workoutnotes/create-workoutnote"
import WorkoutNotes from "@/app/ui/workoutnotes/workoutnotes"
import Pagination from "@/app/ui/coachingcards/pagination"
import { fetchWorkoutNotePages } from "@/app/lib/data"
import clsx from "clsx"
import { lusitana } from "@/app/ui/fonts"
// import Form from "@/app/ui/coachingcards/create-form"

export default async function Page({ searchParams, }: { searchParams?: {query?: string, page?: string} }) {

    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchWorkoutNotePages(query)

    return (
        <div>
            <h1 className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>Workout Notes</h1>
            <Form />
            <WorkoutNotes query={query} currentPage={currentPage}/>
            <Pagination totalPages={totalPages}/>
        </div>
    )
}