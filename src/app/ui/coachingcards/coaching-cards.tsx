import { fetchPeople, fetchClientPages, fetchFilteredClients } from "@/app/lib/data";

export default async function AllClients({
    query,
    currentPage,
}: {
    query: string,
    currentPage: number
}) {
    const clients = await fetchFilteredClients(query, currentPage)
    console.log(clients)
    return (
        <div>
            <div className="flex justify-between text-left m-4">
                <p className="w-1/3">Client name</p>
                <p>Age</p>
                <p>Weight</p>
            </div>
            {clients ? clients.map((client, index) => {
                return (
                    <div
                        key={index}
                        className="flex justify-between text-left bg-gray-100 p-4 mb-4 rounded"
                    >
                        <p className="w-1/3">{client.firstname} {client.lastname}</p>
                        <p>{client.age}</p>
                        <p>{client.weight}</p>
                    </div>
                )
            }) : <p>no clients</p>}
        </div>
    )
}