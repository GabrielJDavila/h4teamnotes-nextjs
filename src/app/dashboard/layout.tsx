import SideNav from "../ui/dashboard/sidenav"
import { auth } from "../../../auth"
import { Session } from "next-auth"

export default function Layout({session}: {session: Session | null}, {children}: {children: React.ReactNode}) {
    if(!session.user) return <div>Not authenticated</div>
    
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden w-screen">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
           <div className="flex-grow p-6 md:overflow-y-auto md:p-12 w-screen">{children}</div> 
        </div>
    )
}