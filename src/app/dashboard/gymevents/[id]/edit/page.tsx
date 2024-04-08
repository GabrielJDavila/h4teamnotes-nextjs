import { fetchGymEventsNoteById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/coachingcards/breadcrumbs";
// import { fetchClientById } from "@/app/lib/data";
// import EditClientCard from "@/app/ui/coachingcards/edit-form";
import Form from "@/app/ui/gymevents/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const gymnote = await fetchGymEventsNoteById(id)
    // const clientinfo = await fetchClientById(id)
    // console.log(clientinfo)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Gym Events", href: "/dashboard/gymevents" },
                    {
                        label: "Note",
                        href: `/dashboard/gymevents/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <Form gymnote={gymnote} />
            {/* <EditClientCard clientinfo={clientinfo}/> */}
        </main>
    )
}