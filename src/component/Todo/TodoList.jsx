import React from "react";
import TodoItem from "./TodoItem";

export default props => (
  <div>
    <ul>
      {props.list.map(item => (
        <TodoItem
          todo={item}
          onDelete={x => {
            props.onDelete(x);
          }}
          store={props.store}
        />
      ))}
    </ul>
  </div>
);

// export default props => (
//   <div>
//     <ul>
//       {props.list.map(e => (
//         <li key={e.id}> {e.title}</li>
//       ))}
//     </ul>
//   </div>
// );
