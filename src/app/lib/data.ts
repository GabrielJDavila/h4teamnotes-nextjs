import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Clients } from "./definitions";

export async function fetchPeople() {
    noStore()

    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        const data = await sql<Clients>`SELECT * FROM h4clients`
        return data.rows
    } catch(err) {

    }
}

type Client = {
    id: string;
    firstname: string;
    lastname: string;
    age: string;
    weight: string;
}

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
                h4clients.firstname,
                h4clients.lastname,
                h4clients.age,
                h4clients.weight
            FROM h4clients
            WHERE
                h4clients.firstname ILIKE ${`%${query}%`} OR
                h4clients.lastname ILIKE ${`%${query}%`}
            LIMIT ${itemsPerPage} OFFSET ${offset}
        `
        return fetchedClients.rows
    } catch(err) {
        console.error("error: ", err)
        throw new Error("Failed to fetch and filter clients.")
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