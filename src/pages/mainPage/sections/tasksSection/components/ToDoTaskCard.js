import {  useEffect,useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../../../../components/StrictModeDroppable';


export const ToDoTaskCard = ({ list }) => {
 const [taskList, setTaskList] = useState(list)

 useEffect(()=>{},[list])

    const listComponent = taskList?.length && taskList.map((task, index) => {
        return (
            <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                    <ul
                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    >
                        {task.name}
                        {provided.placeholder}
                    </ul>
                )}
            </Draggable>
        )
    })

    return <div>
        <DragDropContext>
            <StrictModeDroppable droppableId='tasks' >
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {listComponent}
                    </ul>
                )
                }
            </StrictModeDroppable>
        </DragDropContext>
           
    </div>
}