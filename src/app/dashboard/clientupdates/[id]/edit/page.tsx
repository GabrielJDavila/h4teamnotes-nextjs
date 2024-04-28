import { fetchClientUpdatesById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/coachingcards/breadcrumbs";
// import { fetchClientById } from "@/app/lib/data";
// import EditClientCard from "@/app/ui/coachingcards/edit-form";
import Form from "@/app/ui/clientupdates/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const clientupdate = await fetchClientUpdatesById(id)
    // const clientinfo = await fetchClientById(id)
    // console.log(clientinfo)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Client Updates", href: "/dashboard/clientupdates" },
                    {
                        label: "Note",
                        href: `/dashboard/clientupdates/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <Form clientupdate={clientupdate}/>
            {/* <EditClientCard clientinfo={clientinfo}/> */}
        </main>
    )
}