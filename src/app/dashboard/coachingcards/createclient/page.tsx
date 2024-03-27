import Form from "@/app/ui/coachingcards/create-form"
import { fetchPeople } from "@/app/lib/data"

export default async function Page() {
    const clients = await fetchPeople()

    return (
        <main>
            <Form />
        </main>
    )
}