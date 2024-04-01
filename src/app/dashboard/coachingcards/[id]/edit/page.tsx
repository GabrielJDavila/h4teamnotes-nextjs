import Breadcrumbs from "@/app/ui/coachingcards/breadcrumbs";
import { fetchClientById } from "@/app/lib/data";
import EditClientCard from "@/app/ui/coachingcards/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const clientinfo = await fetchClientById(id)
    console.log(clientinfo)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Coaching Cards", href: "/dashboard/coachingcards" },
                    {
                        label: "Client Info",
                        href: `/dashboard/coachingcards/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <EditClientCard clientinfo={clientinfo}/>
        </main>
    )
}