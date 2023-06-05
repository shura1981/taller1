import { useState, useEffect } from "react";
import TaskComponent from "../components/taks-component";
function Layout() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
      ).json();
      console.log(data);
      // set state when the data received
      setData(data);
      setLoading(false);
    };

    dataFetch();
  }, []);


  return loading ? <div className="d-flex justify-content-center align-items-center">
    <div>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div> : (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h1>Tareas</h1>
          {data.filter(item => item.id < 30).map((item, index) => (
            <TaskComponent task={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );


}

export default Layout
