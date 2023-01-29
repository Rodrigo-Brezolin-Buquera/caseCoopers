import { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { EditableText } from '../../../../../components/EditableText';
import { StrictModeDroppable } from '../../../../../components/StrictModeDroppable';
import { updateTask } from '../../../../../services/requests/updateTask';


export const DragAndDropList = ({ tasks, userId, setLoading }) => {
    const [tasksList, setTasksList] = useState(tasks)
    const [doneTasksList, setDoneTasksList] = useState([])
    const [toDoTasksList, setToDoTasksList] = useState([])


    const filterTasks = (done) => { 
        return tasksList?.length && tasksList
        .filter(i=> i.done === done)
        .map((task, index) => {
            return (
            <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                    <EditableText
                        taskName={task.name}
                        providedRef={provided.innerRef}
                        draggableProps={{ ...provided.draggableProps }}
                        dragHandleProps={{ ...provided.dragHandleProps }}
                        providedPlaceholder={provided.placeholder}
                        />               
                )}
            </Draggable>
        )})
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
        const index = newTaskList.findIndex(i=> i.id === taskId)
        newTaskList[index].done = doneStatus
        setTasksList(newTaskList)
        updateTask(userId, taskId,doneStatus, setLoading)
    }
    return (
    <div>
        <DragDropContext onDragEnd={onDragEnd} >
            <StrictModeDroppable droppableId='toDo' >
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {toDoTasksList}
                    </ul>
                )
                }
            </StrictModeDroppable>

            <StrictModeDroppable droppableId='done' >
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {doneTasksList}
                    </ul>
                )
                }
            </StrictModeDroppable>
        </DragDropContext>

    </div>)
}