import React, {useState, useEffect} from 'react';
// import './Postview.css';
import Postlist from './postlist.js'
import Header from './header.js'


const Postview=()=> {
  const [users, setUsers] = useState([]);

  const getData = async() => {
    const url = 'http://localhost:3004/user';
    let res = await fetch(url);
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
    <Header/>
    <div className="site-container">
      {
        users && users.length > 0 && users.map((user, ind) => {
          return <Postlist key={ind} name={user.name} location={user.location} likes={user.likes} description={user.description} PostImage={user.PostImage} date={user.date} />
        })
      }
    </div>
    </>
  );
}

export default Postview;
