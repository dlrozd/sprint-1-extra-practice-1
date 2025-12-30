type TaskListPropsType = {
    data: {
        title: string,
        tasks: {taskId: number, title: string, isDone: boolean}[],
        students: string[]
    }
}

export const TaskList = (props: TaskListPropsType) => {

    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>

            <h4>Students:</h4>
            <div className="students-list">
                <ul>
                    {props.data.students.map(s => <li key={s}>{s}</li>)}
                </ul>
            </div>
        </div>
    )
}