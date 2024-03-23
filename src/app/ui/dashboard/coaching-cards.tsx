import { fetchPeople } from "@/app/lib/data";

export default async function AllClients() {
    const clients = await fetchPeople()
    return (
        <div>
            <p>clients</p>
            {clients ? clients.map((client, index) => {
                return (
                    <div
                        key={index}
                    >
                        <p>{client.name}</p>
                    </div>
                )
            }) : <p>no clients</p>}
        </div>
    )
}