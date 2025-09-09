import TaskTitle from "./TaskTitle"
import TaskItem from "./TaskItem"
import { Task } from "../types"

export default function TaskCard({ task }: { task: Task }) {
    const {title} = task;
    return (
        <section>
            <p>Task card</p>
            <TaskTitle title={title} />
            <TaskItem />
        </section>
    )
}
