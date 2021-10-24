import React, { useState } from "react";

function Todoitem(props) {
 // const [inputTextState, setInputTextState] = useState(false);
 // const [clickTimes, setClickTimes] = useState(0);

  //ANGELA WAY

  //  function handleClick(){
  //      setInputTextState(()=>{
  //        return !inputTextState;
  //      })
  // }
  
  //console.log(clickTimes);

  return (
    <li
      onClick={()=>{
        props.onChecked(props.id)
      }}
     // style={{textDecoration:inputTextState?"line-through":null}}
    >
      {props.item}
    </li>
  );
}

export default Todoitem;

// ANGELA WAY

//  function handleClick(){
//      setInputTextState(()=>{
//        return !inputTextState;
//      })
// }

//MY WAY
 // function handleClick(event) {
  //   //console.log(event);
  //   setInputTextState(true);
  //   setClickTimes((prevValue) => {
  //     return clickTimes + 1;
  //   });
  // }

// }} style={{
//   textDecoration:
//     clickTimes % 2 != 0
//       ? inputTextState
//         ? "line-through"
//         : "none"
//       : null