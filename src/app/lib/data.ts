import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Clients } from "./definitions";

type Client = {
    id: string;
    firstname: string;
    lastname: string;
    age: string;
    weight: string;
    note: string;
}

type Note = {
    id: string;
    username: string;
    date: string;
    note: string;
}

export async function fetchPeople() {
    noStore()

    try {
        const data = await sql<Clients>`SELECT * FROM h4clients`
        return data.rows
    } catch(err) {

    }
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
                h4clients.id,
                h4clients.firstname,
                h4clients.lastname,
                h4clients.age,
                h4clients.weight
            FROM h4clients
            WHERE
                h4clients.firstname ILIKE ${`%${query}%`} OR
                h4clients.lastname ILIKE ${`%${query}%`}
            ORDER BY h4clients.firstname ASC
            LIMIT ${itemsPerPage} OFFSET ${offset}
        `
        return fetchedClients.rows
    } catch(err) {
        console.error("error: ", err)
        throw new Error("Failed to fetch and filter clients.")
    }
}

export async function fetchClientById(id: string) {
    noStore()
    try {
        const data = await sql<Client>`
            SELECT
                h4clients.id,
                h4clients.firstname,
                h4clients.lastname,
                h4clients.age,
                h4clients.weight,
                h4clients.note
            FROM h4clients
            WHERE h4clients.id = ${id}
        `
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

// workout notes fetching functions
export async function fetchWorkoutNotes(
    // query: string,
    // currentPage: number,
) {
    noStore()
    // const offset = (currentPage - 1) * itemsPerPage
    // LIMIT ${itemsPerPage} OFFSET ${offset}
    try {
        const fetchedNotes = await sql<Note>`
            SELECT
                workoutnotes.id,
                workoutnotes.username,
                workoutnotes.date,
                workoutnotes.note
            FROM workoutnotes
            ORDER BY workoutnotes.date DESC
            
        `
        return fetchedNotes.rows
    } catch(err) {
        console.error("error: ", err)
        throw new Error("Failed to fetch workout notes.")
    }
}

export async function fetchWorkoutNoteById(id: string) {
    noStore()
    try {
        const data = await sql<Note>`
            SELECT
                workoutnotes.id,
                workoutnotes.username,
                workoutnotes.date,
                workoutnotes.note
            FROM workoutnotes
            WHERE workoutnotes.id = ${id}
        `
        return data.rows[0]
    } catch(err) {
        console.error("error: ", err)
        throw new Error(`failed to fetch client ${id}`)
    }
}

// gymevents notes fetching functions

export async function fetchGymEventsNotes() {
    noStore()

    try {
        const data = await sql<Note>`
            SELECT
                gymevents.id,
                gymevents.username,
                gymevents.date,
                gymevents.note
            FROM gymevents
            ORDER BY gymevents.date DESC
        `
        return data.rows
    } catch(err) {
        console.error("error: ", err)
        throw new Error("failed to fetch notes")
    }
}

export async function fetchGymEventsNoteById(id: string) {
    noStore()

    try {
        const data = await sql<Note>`
            SELECT
                gymevents.id,
                gymevents.username,
                gymevents.date,
                gymevents.note
            FROM gymevents
            WHERE id = ${id}
        `
        return data.rows[0]
    } catch(err) {
        console.error("error: ", err)
        throw new Error(`failed to fetch note ${id}`)
    }
}