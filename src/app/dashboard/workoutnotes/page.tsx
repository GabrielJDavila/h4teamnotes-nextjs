import Form from "@/app/ui/workoutnotes/create-workoutnote"
import WorkoutNotes from "@/app/ui/workoutnotes/workoutnotes"
// import Form from "@/app/ui/coachingcards/create-form"

export default async function Page() {
    return (
        <div>
            <p>Workout Notes Page</p>
            <Form />
            <WorkoutNotes />
        </div>
    )
}