import { useState } from "react";
import { updateTask } from "../../../../../services/requests/updateTask";


export const EditableText = (props) => {
    const [text, setText] = useState(props.task.name);
    const [showInputEle, setShowInputEle] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleKeyPress = async (e) => {
       if(e.key === "Enter"){
        const editedTask = {name: text, done: props.task.done}
         await updateTask(props.userId, props.task.id, editedTask, setLoading )
         setShowInputEle(false)
       }
  
    };

    // criar função para que ao fechar, faça uma requisição
    return (
        <div>
        {
          showInputEle ? (
            <input 
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={() => setShowInputEle(false)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          ) : (
            <div 
              onDoubleClick={() => setShowInputEle(true)}
              style={{ 
                display: "inline-block", 
                height: "25px", 
                minWidth: "300px", 
              }}
              ref = {props.providedRef}
              {...props.draggableProps}
              {...props.dragHandleProps}

            >
              {text}
             
            </div>
          )
        }
         {props.providedPlaceholder}
      </div>     
    );
}

