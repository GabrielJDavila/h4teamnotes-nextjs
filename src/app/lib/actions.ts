"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils"

// const FormSchema = z.object({

// })

export async function createClient(formData: FormData) {
    const rawFormData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        age: formData.get("age"),
        weight: formData.get("weight")
    }

    console.log(rawFormData)
}