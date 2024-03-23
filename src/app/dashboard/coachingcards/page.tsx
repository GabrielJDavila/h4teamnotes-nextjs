import { fetchPeople } from "@/app/lib/data"
import AllClients from "../../ui/dashboard/coaching-cards"

export default async function page() {
    return (
        <div>
            <p>Coaching cards page</p>
            <AllClients />
        </div>
    )
}