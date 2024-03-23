import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const clientName = searchParams.get("clientName")
    const clientAge = searchParams.get("clientAge")

    try {
        if(!clientName || !clientAge) throw new Error("Client name is required")
        await sql`INSERT INTO People (Name, Age) VALUES (${clientName}, ${clientAge})`
    } catch(error) {
        return NextResponse.json({ error }, { status: 500 })
    }

    const clients = await sql`SELECT * FROM People`
    console.log(clients.rows)
    return NextResponse.json({ clients }, { status: 200 })
}

// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
 
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const petName = searchParams.get('petName');
//   const ownerName = searchParams.get('ownerName');
 
//   try {
//     if (!petName || !ownerName) throw new Error('Pet and owner names required');
//     await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
 
//   const pets = await sql`SELECT * FROM Pets;`;
//   return NextResponse.json({ pets }, { status: 200 });
// }