import { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { EditableText } from '../../../../../components/EditableText';
import { StrictModeDroppable } from '../../../../../components/StrictModeDroppable';


export const DragAndDropList = ({ list }) => {
    const [taskList, setTaskList] = useState(list)

    useEffect(() => { }, [list])

    const listComponent = taskList?.length && taskList.map((task, index) => {
        return (
            <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                    <EditableText
                        taskName={task.name}
                        providedRef={provided.innerRef}
                        draggableProps={{ ...provided.draggableProps }}
                        dragHandleProps={{ ...provided.dragHandleProps }}
                        providedPlaceholder={provided.placeholder}


                    >
                    </EditableText>
                )}
            </Draggable>
        )
    })

    return (
    <div>
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

    </div>)
}