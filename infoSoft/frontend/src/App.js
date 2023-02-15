import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/all").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleAge = (e) => {
    if (e.target.value == "all") {
      axios.get("http://localhost:8080/all").then((res) => {
        setData(res.data);
      });
    } else {
      let age = e.target.value.split("-");
      const filter = data.filter((el) => el.age >= age[0] && el.age <= age[1]);
      setData(filter);
    }
  };

  const handleMarriage = (e) => {
    const value = e.target.value=="true"?true:false
    const filter = data.filter((el) => el.isMarried==value);
    setData(filter);
  };

  const handleChild = (e) => {
    const value = e.target.value=="true"?true:false
    const filter = data.filter((el) => el.hasChild==value);
    setData(filter);
  };
  return (
    <div className="App">
      <div>
        <select onChange={handleAge}>
          <option hidden>Age</option>
          <option value={"all"}>all</option>
          <option value={"1-5"}>1-5</option>
          <option value={"5-10"}>5-10</option>
          <option value={"10-15"}>10-15</option>
          <option value={"15-20"}>15-20</option>
        </select>
        <select onChange={handleMarriage}>
          <option hidden>Marital Status</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
        <select onChange={handleChild}>
          <option hidden>Children Status</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
      </div>

      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARRITAL STATUS</th>
            <th>CHILDREN STATUS</th>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>{el.isMarried ? "YES" : "NO"}</td>
                  <td>{el.hasChild ? "YES" : "NO"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
