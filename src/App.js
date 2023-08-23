import { useState } from "react";

function Task(props) {
  const styleDone = "w-5/6 sm:w-1/2 bg-[#99f7ab] rounded-xl py-2 px-4 font-semibold m-2 flex justify-between";
  const styleUnDone = "w-5/6 sm:w-1/2 bg-[#ddbdd5] rounded-xl py-2 px-4 font-semibold m-2 flex justify-between";
  const [d,nD] = useState(props.completed);
  return (
    <div className="flex justify-center">
      <div className={(d)?styleDone:styleUnDone}>
        <h1 className="w-3/4 sm:w-5/6">{props.name}</h1>
        <button className="mx-2 bg-[#2dd881] px-6 py-1 rounded-3xl" onClick={(e)=>{
          let arr2 = props.arr;
          arr2[props.index].done = !arr2[props.index].done;
          console.log(arr2);
          nD(!d);
          props.set(arr2);
        }}>Done</button>
        <button className="mx-2 bg-[#dd2943] px-2 rounded-full text-white" onClick={(e)=>{
          // console.log(props.arr);
          let arr2 = props.arr;
          // arr2 = arr2.slice(1);
          const halfBforeTheUnwantedElement = arr2.slice(0, props.index);

          const halfAfterTheUnwantedElement = arr2.slice(props.index+1,props.arr.length);
          arr2 = halfBforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);
          // console.log(arr2)
          props.set(arr2);
          
        }}>X</button>
      </div>
    </div>
  );
}

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    const tmp = {"task": task, "done": false};
    setTasks([tmp, ...tasks]);
    setTask("");
    console.log(tasks);
  };
  return (
    <>
      <div className="App flex justify-center mt-8 mb-2">
        <div className="flex justify-between items-center bg-[#773ab5] px-4  w-1/2 rounded-3xl">
          <input
            className="outline-none bg-[#773ab5] font-lg py-4 w-full px-4 rounded-3xl text-white"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />
          <button
            className="bg-[#2dd881] px-6 py-1 rounded-3xl"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
      {tasks.map((value, index, arr) => {
        // console.log(value, index, arr);
        return <Task name={value.task} completed={value.done} index={index} arr={arr} set = {setTasks}/>;
      })}
    </>
  );
}

export default App;
