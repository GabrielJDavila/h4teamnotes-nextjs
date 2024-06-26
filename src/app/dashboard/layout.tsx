import SideNav from "../ui/dashboard/sidenav"
import { auth } from "../../../auth"
import SignOutBtn from "../ui/dashboard/signoutbtn"

export default async function Layout({children}: {children: React.ReactNode}) {
    // if(!session.user) return <div>Not authenticated</div>
   const session = await auth()
   if(!session) return <div>Not signed in</div>
   
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden w-screen">
            <div className="w-full flex-none md:w-64">
                <SideNav>
                    <SignOutBtn/>
                </SideNav>
            </div>
           <div className="flex-grow p-6 md:overflow-y-auto md:p-12 w-screen mt-28 md:mt-0">{children}</div> 
        </div>
    )
}