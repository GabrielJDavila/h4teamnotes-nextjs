import { fetchPeople } from "@/app/lib/data"
import Search from "@/app/ui/search-clients"
import AllClients from "../../ui/dashboard/coaching-cards"

export default async function page() {
    return (
        <div>
            <p>Coaching cards page</p>
            <Search placeholder="Search for clients..."/>
            <AllClients />
        </div>
    )
}