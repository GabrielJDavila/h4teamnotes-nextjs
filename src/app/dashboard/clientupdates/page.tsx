import Form from "@/app/ui/clientupdates/create-form"
import ClientUpdates from "@/app/ui/clientupdates/clientupdates"
import Pagination from "@/app/ui/coachingcards/pagination"
import { fetchWorkoutNotePages, fetchClientUpdatesPages } from "@/app/lib/data"
import clsx from "clsx"
import { lusitana } from "@/app/ui/fonts"
// import Form from "@/app/ui/coachingcards/create-form"

export default async function Page({ searchParams, }: { searchParams?: {query?: string, page?: string} }) {

    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchClientUpdatesPages(query)

    return (
        <div>
            <h1 className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>Client Updates</h1>
            <Form />
            <ClientUpdates query={query} currentPage={currentPage}/>
            <Pagination totalPages={totalPages}/>
        </div>
    )
}