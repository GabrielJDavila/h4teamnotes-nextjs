
import { fetchPeople, fetchClientPages, fetchFilteredClients } from "@/app/lib/data"
import Search from "@/app/ui/search-clients"
import Form from "@/app/ui/coachingcards/create-form"
import AllClients from "../../ui/coachingcards/coaching-cards"
import Pagination from "@/app/ui/coachingcards/pagination"
import clsx from "clsx"
import { lusitana } from "@/app/ui/fonts"

export default async function page(
    { searchParams, }: { searchParams?: {query?: string, page?: string} }) {
    
    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchClientPages(query)
    console.log(query)
    return (
        <div>
            <h1 className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>Coaching Cards</h1>
            <Form />
            <Search placeholder="Search for clients..."/>
            <AllClients query={query} currentPage={currentPage}/>
            <Pagination totalPages={totalPages}/>
        </div>
    )
}