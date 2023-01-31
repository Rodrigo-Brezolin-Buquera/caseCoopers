import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import { updateTask } from '../../../../../services/requests/updateTask';
import { TasksCard } from './TasksCard';
import { Box } from '@chakra-ui/react';
import { AddTaskInput } from './AddTaskInput';
import { TaskLine } from './TaskLine';


export const DragAndDropList = ({ tasks, userId, setLoading }) => {
    const [tasksList, setTasksList] = useState(tasks)
    const [doneTasksList, setDoneTasksList] = useState([])
    const [toDoTasksList, setToDoTasksList] = useState([])

    const filterTasks = (done) => {
        return tasksList?.length && tasksList
            .filter(i => i.done === done)
            .map((task, index) => {
                return (
                    <TaskLine
                        key={task.id}
                        userId={userId}
                        task={task}
                        index={index}
                        setLoading={setLoading}
                    />
                )
            })
    }

    useEffect(() => {
        setTasksList(tasks)
        setDoneTasksList(filterTasks(true))
        setToDoTasksList(filterTasks(false))

    }, [tasksList, tasks])

    const onDragEnd = (result) => {
        const doneStatus = result?.destination?.droppableId === "toDo" ? false : true
        const taskId = result.draggableId
        const newTaskList = [...tasksList]
        const index = newTaskList.findIndex(i => i.id === taskId)
        newTaskList[index].done = doneStatus
        setTasksList(newTaskList)
        updateTask(userId, taskId, newTaskList[index], setLoading)
    }
    return (
        <Box
            display={"flex"}
            w={"100%"}
            gap={"2em"}
        >
            <DragDropContext onDragEnd={onDragEnd} >

                <TasksCard
                    cardName={"To-Do"}
                    firstLine={"Take a breath"}
                    secondLine={"Start doing"}
                    userId={userId}
                    setLoading={setLoading}
                >
                    <AddTaskInput userId={userId} setLoading={setLoading} />
                    <StrictModeDroppable droppableId='toDo' >
                        {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>
                                {toDoTasksList.length ? toDoTasksList : null}
                            </ul>
                        )
                        }
                    </StrictModeDroppable>

                </TasksCard>

                <TasksCard
                    cardName={"Done"}
                    firstLine={"Congratulations"}
                    secondLine={`You have done ${doneTasksList?.length || 0} tasks`}
                    userId={userId}
                    setLoading={setLoading}
                >
                    <StrictModeDroppable droppableId='done' >
                        {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>
                                {doneTasksList.length ? doneTasksList : null}
                            </ul>
                        )
                        }
                    </StrictModeDroppable>
                </TasksCard>
            </DragDropContext>

        </Box>)
}