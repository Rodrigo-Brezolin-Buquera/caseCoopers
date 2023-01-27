import { useState } from "react";


export const EditableText = (props) => {
    const [text, setText] = useState(props.taskName);
    const [showInputEle, setShowInputEle] = useState(false);

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
              {props.providedPlaceholder}
            </div>
          )
        }
      </div>     
    );
}

