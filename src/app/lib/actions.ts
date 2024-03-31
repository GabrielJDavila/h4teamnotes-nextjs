"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const FormSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    age: z.string(),
    weight: z.string()
})

const CreateClient = FormSchema

export async function createClient(formData: FormData) {
    const { firstname, lastname, age, weight } = CreateClient.parse({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        age: formData.get("age"),
        weight: formData.get("weight")
    })

    await sql`
        INSERT INTO h4clients (firstname, lastname, age, weight)
        VALUES (${firstname}, ${lastname}, ${age}, ${weight})
    `
    revalidatePath("/dashboard/coachingcards")
    redirect("/dashboard/coachingcards")
}