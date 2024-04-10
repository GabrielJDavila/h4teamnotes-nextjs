
import { fetchGymEventsNoteById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/coachingcards/breadcrumbs";
import EditDashNote from "@/app/ui/dashboard/edit-note";
// import { fetchClientById } from "@/app/lib/data";
// import EditClientCard from "@/app/ui/coachingcards/edit-form";
import Form from "@/app/ui/gymevents/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    // const gymnote = await fetchGymEventsNoteById(id)
  
    // const clientinfo = await fetchClientById(id)
    // console.log(clientinfo)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Dashboard", href: "/dashboard" },
                    {
                        label: "Edit Note",
                        href: `/dashboard/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <EditDashNote/>
        </main>
    )
}