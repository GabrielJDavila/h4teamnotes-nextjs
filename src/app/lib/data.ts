import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Clients } from "./definitions";
export async function fetchPeople() {
    noStore()

    try {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const data = await sql<Clients>`SELECT * FROM people`
        return data.rows
    } catch(err) {

    }
}