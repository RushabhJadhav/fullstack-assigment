import { useEffect, useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/tasks");
    const data = await res.json();
    setTask(data);
  }

  useEffect(() => {
    fetchData();
    console.log(task);
  }, []);

  return (
    <></>
  )
}

export default App;