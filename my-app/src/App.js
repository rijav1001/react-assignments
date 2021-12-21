import logo from './logo.svg';
import './App.css';

function App() {
  const employee = {
      name: "Rijav",
      location: "India",
      bloodGroup: "B+",
      age: 22,
      profileImg: "https://www.w3schools.com/howto/img_avatar.png"
  }
  return (
    <div className="App">
      <img src={employee.profileImg} className="proimg" />
      <h1 className="name">{employee.name}</h1>
      <p className="key">Location</p>
      <p className="values">{employee.location}</p>
      <p className="key">Blood Group</p>
      <p className="values">{employee.bloodGroup}</p>
      <p className="key">Age</p>
      <p className="values">{employee.age}</p>
    </div>
  );
}

export default App;
