import { fetchWorkoutNoteById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/coachingcards/breadcrumbs";
// import { fetchClientById } from "@/app/lib/data";
// import EditClientCard from "@/app/ui/coachingcards/edit-form";
import Form from "@/app/ui/workoutnotes/edit-workoutnote";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const workoutnote = await fetchWorkoutNoteById(id)
    // const clientinfo = await fetchClientById(id)
    // console.log(clientinfo)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Workout Notes", href: "/dashboard/workoutnotes" },
                    {
                        label: "Note",
                        href: `/dashboard/workoutnotes/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <Form workoutnote={workoutnote}/>
            {/* <EditClientCard clientinfo={clientinfo}/> */}
        </main>
    )
}