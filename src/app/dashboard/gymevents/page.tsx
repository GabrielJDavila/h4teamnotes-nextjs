import Form from "@/app/ui/gymevents/create-form"
import GymEventsNotes from "@/app/ui/gymevents/gymeventsnotes"

export default function page() {
    return (
        <main>
            <p>Gym Events</p>
            <Form />
            <GymEventsNotes />
        </main>
    )
}