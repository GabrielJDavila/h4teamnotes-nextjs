const { db } = require("@vercel/postgres")

const { clients } = require("../src/app/lib/seededclients.js")

// const bcrypt = require("bcrypt")

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        // create the "clients table" if it doesnt exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS h4clients (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                age TEXT NOT NULL,
                weight TEXT NOT NULLwhat 
            )
        `
        console.log("created clients table")

        // Insert data in the "clients" table
        const insertedClients = await Promise.all(
            clients.map(async (person, index) => {
                return client.sql`
                INSERT INTO h4clients (firstname, lastname, age, weight)
                VALUES (${person.firstName}, ${person.lastName}, ${person.age}, ${person.weight})
                ON CONFLICT (id) DO NOTHING
                `
            })
        )
        console.log(`Seeded ${insertedClients.length} clients`)
        return {
            createTable,
            clients: insertedClients
        }
    } catch(err) {
        console.error("error seeding clients:", err)
        throw err
    }
}

async function main() {
    const client = await db.connect()

    await seedUsers(client)

    await client.end()
}

main().catch((err) => {
    console.error("error occurred while attempting to seed db: ", err)
})