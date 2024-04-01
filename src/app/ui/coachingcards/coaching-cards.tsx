
import { fetchPeople, fetchClientPages, fetchFilteredClients } from "@/app/lib/data";
import { Button } from "../button";
import { PencilSquareIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Clients } from "@/app/lib/definitions";

export default async function AllClients({
    query,
    currentPage,
}: {
    query: string,
    currentPage: number
}) {
    // const [openView, setOpenView] = useState(false)

    const clients = await fetchFilteredClients(query, currentPage)
    console.log(clients)

    // function handleViewClient() {
    //     setOpenView(prev => !prev)
    // }
    return (
        <div>
            <div className="flex justify-between text-left m-4">
                <p className="w-1/3">Client name</p>
            </div>
            {clients ? clients.map((client, index) => {
                return (
                        <div
                            key={index}
                            className="flex justify-between text-left bg-gray-100 p-4 mb-4 rounded"
                        >
                            <p className="w-1/3">{client.firstname} {client.lastname}</p>
                            <p>age: {client.age}</p>
                            <p>weight: {client.weight}</p>
                            <EyeIcon
                                // onClick={handleViewClient}
                                className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"
                            />
                            <Link href={`/dashboard/coachingcards/${client.id}/edit`}>
                            <PencilSquareIcon
                                className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"
                            />
                            </Link>
                        </div>
                )
            }) : <p>no clients</p>}
        </div>
    )
}