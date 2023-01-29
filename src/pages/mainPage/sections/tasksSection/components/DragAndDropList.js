import { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { EditableText } from '../../../../../components/EditableText';
import { StrictModeDroppable } from '../../../../../components/StrictModeDroppable';


export const DragAndDropList = ({ tasks }) => {
    const [doneTasksList, setDoneTasksList] = useState([])
    const [toDoTasksList, setToDoTasksList] = useState([])


    const filterTasks = (done) => { 
        return tasks?.length && tasks
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
        setDoneTasksList(filterTasks(true))
        setToDoTasksList(filterTasks(false))

    }, [tasks])

    
    return (
    <div>
        <DragDropContext>
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