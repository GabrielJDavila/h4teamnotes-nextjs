import Form from "@/app/ui/workoutnotes/create-workoutnote"
import WorkoutNotes from "@/app/ui/workoutnotes/workoutnotes"
import Pagination from "@/app/ui/coachingcards/pagination"
import { fetchWorkoutNotePages } from "@/app/lib/data"
// import Form from "@/app/ui/coachingcards/create-form"

export default async function Page({ searchParams, }: { searchParams?: {query?: string, page?: string} }) {

    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchWorkoutNotePages(query)

    return (
        <div>
            <p>Workout Notes Page</p>
            <Form />
            <WorkoutNotes query={query} currentPage={currentPage}/>
            <Pagination totalPages={totalPages}/>
        </div>
    )
}