
import { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData';

function App() {

  const [userData, setUserData] = useState(null);




  async function getUserData() {
    const data = await fetch("http://localhost:3000/getUser");
    console.log(data);
    const userData = await data.json();
    setUserData(userData);
  }

  useEffect(() => {
    console.log("use Effect is called");
    getUserData();
  }, []);

  console.log(userData);

  function deleteUser(id) {

    const deleteUsers = userData.filter((data) => {
      return data._id !== id;
    })

    setUserData(deleteUsers);

  }



  console.log(userData);
  return (
    <div className="App">
      <h2>Hello user</h2>
      <table>
        {userData && userData.map((data) => {
          return (
            <UserData props={{ data, deleteUser }}></UserData>
          )
        })}
      </table>
    </div>
  );
}




export default App;