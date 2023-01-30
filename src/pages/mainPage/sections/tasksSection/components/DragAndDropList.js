import { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { EditableText } from './EditableText';
import { StrictModeDroppable } from './StrictModeDroppable';
import { updateTask } from '../../../../../services/requests/updateTask';
import { TasksCard } from './TasksCard';
import { Box } from '@chakra-ui/react';
import { AddTaskInput } from './AddTaskInput';
import { DeleteTaskButton } from './DeleteTaskButton';


export const DragAndDropList = ({ tasks, userId, setLoading }) => {
    const [tasksList, setTasksList] = useState(tasks)
    const [doneTasksList, setDoneTasksList] = useState([])
    const [toDoTasksList, setToDoTasksList] = useState([])
   


    const filterTasks = (done) => {
        return tasksList?.length && tasksList
            .filter(i => i.done === done)
            .map((task, index) => {
                return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                            <Box display={"flex"}>
                               <EditableText
                                userId={userId}
                                task={task}
                                providedRef={provided.innerRef}
                                draggableProps={{ ...provided.draggableProps }}
                                dragHandleProps={{ ...provided.dragHandleProps }}
                                providedPlaceholder={provided.placeholder}
                            /> 
                                <DeleteTaskButton
                                userId={userId}
                                taskId={task.id}
                                />
                            </Box>
                            
                        )}
                    </Draggable>
                )
            })
    }


    useEffect(() => {
        setTasksList(tasks)
        setDoneTasksList(filterTasks(true))
        setToDoTasksList(filterTasks(false))

    }, [tasksList, tasks])

    function onDragEnd(result) {
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
        >
            <DragDropContext onDragEnd={onDragEnd} >

                <TasksCard
                    cardName={"To-Do"}
                    firstLine={"Take a breath"}
                    secondLine={"Start doing"}
                    userId={userId}
                >   
                    <AddTaskInput userId={userId} setLoading={setLoading} />
                    <StrictModeDroppable droppableId='toDo' >
                        {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>
                                {toDoTasksList}
                            </ul>
                        )
                        }
                    </StrictModeDroppable>

                </TasksCard>

                <TasksCard
                    cardName={"Done"}
                    firstLine={"Congratulations"}
                    secondLine={"You have done XXXX tasks"}
                    userId={userId}
                >
                <StrictModeDroppable droppableId='done' >
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {doneTasksList}
                        </ul>
                    )
                    }
                </StrictModeDroppable>
                </TasksCard>
            </DragDropContext>

        </Box>)
}