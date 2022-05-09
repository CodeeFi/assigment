
import { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData';

function App() {

  const [userData, setUserData] = useState(null);




  async function getUserData() {
    const data = await fetch("http://localhost:3000/getUser");
    const userData = await data.json();
    setUserData(userData);
  }

  useEffect(() => {
    getUserData();
  }, []);



  function deleteUser(id) {

    const deleteUsers = userData.filter((data) => {
      return data._id !== id;
    })

    setUserData(deleteUsers);

  }

  return (
    <div className="App">
      <h2>Hello user</h2>
      <table>
        <tbody>
          {userData && userData.map((data, index) => {
            return (
              <UserData key={index} props={{ data, deleteUser }}></UserData>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}




export default App;