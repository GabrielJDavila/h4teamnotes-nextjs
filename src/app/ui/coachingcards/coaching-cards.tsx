import { fetchPeople, fetchClientPages } from "@/app/lib/data";

export default async function AllClients() {
    const clients = await fetchPeople()
    console.log(clients)
    return (
        <div>
            <p>clients</p>
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