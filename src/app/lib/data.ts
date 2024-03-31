import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Clients } from "./definitions";

type Client = {
    id: string;
    firstname: string;
    lastname: string;
    age: string;
    weight: string;
}

// export async function addClient(c) {
//     noStore()

//     try {
//         const insertedClients = await sql<Client>`
//                 INSERT INTO h4clients (firstname, lastname, age, weight)
//                 VALUES (${person.firstName}, ${person.lastName}, ${person.age}, ${person.weight})
//                 ON CONFLICT (id) DO NOTHING
//                 `
//         )
//         console.log(`Seeded ${insertedClients.length} clients`)
//     }
// }

export async function fetchPeople() {
    noStore()

    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        const data = await sql<Clients>`SELECT * FROM h4clients`
        return data.rows
    } catch(err) {

    }
}


// WHERE
//                 h4clients.firstname ILIKE ${`%${query}%`} OR
//                 h4clients.lastname ILIKE ${`%${query}%`}
//             LIMIT ${itemsPerPage} OFFSET ${offset}

const itemsPerPage = 10
export async function fetchFilteredClients(
    query: string,
    currentPage: number,
) {
    noStore()
    const offset = (currentPage - 1) * itemsPerPage

    try {
        const fetchedClients = await sql<Client>`
            SELECT
                h4clients.id,
                h4clients.firstname,
                h4clients.lastname,
                h4clients.age,
                h4clients.weight
            FROM h4clients
            ORDER BY h4clients.firstname ASC
            LIMIT ${itemsPerPage} OFFSET ${offset}
        `
        return fetchedClients.rows
    } catch(err) {
        console.error("error: ", err)
        throw new Error("Failed to fetch and filter clients.")
    }
}

// export async function fetchClient() {
//     try {
//        const data = await sql<Client>`
//         SELECT
//             h4clients.id,

//        ` 
//     }
// }

export async function fetchClientById(id: string) {
    noStore()
    try {
        const data = await sql<Client>`
            SELECT
                h4clients.id,
                h4clients.firstname,
                h4clients.lastname,
                h4clients.age,
                h4clients.weight
            FROM h4clients
            WHERE h4clients.id = ${id}
        `
        // const clientinfo = data.rows.map(client => ({
        //     ...client
        // }))
        // return clientinfo[0]
        return data.rows[0]
    } catch(err) {
        console.error("error: ", err)
        throw new Error(`failed to fetch client ${id}`)
    }
}

export async function fetchClientPages(query: string) {
    noStore()

    try {
        const count = await sql`SELECT COUNT(*)
        FROM h4clients
        WHERE
            h4clients.firstname ILIKE ${`%${query}%`} OR
            h4clients.lastname ILIKE ${`%${query}%`}
        `
        const totalPages = Math.ceil(Number(count.rows[0].count) / itemsPerPage)
        return totalPages
    } catch(err) {
        console.error("Database error: ", err)
        throw new Error("failed to fetch total number of clients")
    }
}