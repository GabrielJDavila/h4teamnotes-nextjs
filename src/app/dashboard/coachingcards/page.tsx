import { fetchPeople, fetchClientPages } from "@/app/lib/data"
import Search from "@/app/ui/search-clients"
import AllClients from "../../ui/coachingcards/coaching-cards"
import Pagination from "@/app/ui/coachingcards/pagination"

export default async function page(
    { searchParams, }: { searchParams?: {query?: string, page?: string} }) {
    
    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchClientPages(query)

    return (
        <div>
            <p>Coaching cards page</p>
            <Search placeholder="Search for clients..."/>
            <AllClients query={query} currentPage={currentPage}/>
            <Pagination totalPages={totalPages}/>
        </div>
    )
}