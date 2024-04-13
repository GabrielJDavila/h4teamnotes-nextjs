"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const FormSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    age: z.string(),
    weight: z.string(),
    note: z.string()
})

const updateFormSchema = z.object({
    id: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    age: z.string(),
    weight: z.string(),
    note: z.string()
})

const createNoteSchema = z.object({
    user: z.string(),
    date: z.string(),
    note: z.string()
})

const CreateClient = FormSchema
const UpdateClient = updateFormSchema
const CreateNote = createNoteSchema

export async function createClient(formData: FormData) {
    const { firstname, lastname, age, weight, note } = CreateClient.parse({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        age: formData.get("age"),
        weight: formData.get("weight"),
        note: formData.get("note")
    })
    await sql`
        INSERT INTO h4clients (firstname, lastname, age, weight, note)
        VALUES (${firstname}, ${lastname}, ${age}, ${weight}, ${note})
    `
    revalidatePath("/dashboard/coachingcards")
    redirect("/dashboard/coachingcards")
}

export async function updateClient(clientId: string, formData: FormData) {
    const { id, firstname, lastname, age, weight, note } = UpdateClient.parse({
        id: formData.get("id"),
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        age: formData.get("age"),
        weight: formData.get("weight"),
        note: formData.get("note")
    })

    await sql`
        UPDATE h4clients
        SET
            id = ${id},
            firstname = ${firstname},
            lastname = ${lastname},
            age = ${age},
            weight = ${weight},
            note = ${note}
        WHERE id = ${clientId}
    `
    revalidatePath("/dashboard/coachingcards")
    redirect("/dashboard/coachingcards")
}

export async function deleteClient(clientId: string, formData: FormData) {
    await sql`
        DELETE FROM h4clients
        WHERE id = ${clientId}
    `
    revalidatePath("/dashboard/coachingcards")
    redirect("/dashboard/coachingcards")
}

// workoutnotes actions

export async function createWorkoutNote(formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        INSERT INTO workoutnotes (username, date, note)
        VALUES (${user}, ${date}, ${note})
    `

    revalidatePath("/dashboard/workoutnotes")
    redirect("/dashboard/workoutnotes")
}

export async function updateWorkoutNote(noteId: string, formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        UPDATE workoutnotes
        SET
            username = ${user},
            date = ${date},
            note = ${note}
        WHERE id = ${noteId}    
    `
    revalidatePath("/dashboard/workoutnotes")
    redirect("/dashboard/workoutnotes")
}

export async function deleteWorkoutNote(noteId: string, formData: FormData) {
    await sql`
        DELETE FROM workoutnotes
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard/workoutnotes")
    redirect("/dashboard/workoutnotes")
}

// gymevents actions

export async function createGymEventNote(formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        INSERT INTO gymevents (username, date, note)
        VALUES (${user}, ${date}, ${note})
    `
    revalidatePath("/dashboard/gymevents")
    redirect("/dashboard/gymevents")
}

export async function updateGymEventNote(noteId: string, formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        UPDATE gymevents
        SET
            username = ${user},
            date = ${date},
            note = ${note}
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard/gymevents")
    redirect("/dashboard/gymevents")
}

export async function deleteGymEventNote(noteId: string, formData: FormData) {
    await sql`
        DELETE FROM gymevents
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard/gymevents")
    redirect("/dashboard/gymevents")
}

// -- dashboard actions -- //

export async function updateDashWorkoutNote(noteId: string, formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        UPDATE workoutnotes
        SET
            username = ${user},
            date = ${date},
            note = ${note}
        WHERE id = ${noteId}    
    `
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export async function deleteDashWorkoutNote(noteId: string, formData: FormData) {
    await sql`
        DELETE FROM workoutnotes
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export async function updateDashGymEventNote(noteId: string, formData: FormData) {
    const { user, date, note } = CreateNote.parse({
        user: formData.get("user"),
        date: formData.get("date"),
        note: formData.get("note")
    })
    await sql`
        UPDATE gymevents
        SET
            username = ${user},
            date = ${date},
            note = ${note}
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export async function deleteDashGymEventNote(noteId: string, formData: FormData) {
    await sql`
        DELETE FROM gymevents
        WHERE id = ${noteId}
    `
    revalidatePath("/dashboard")
    redirect("/dashboard")
}