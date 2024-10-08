import React, { useState } from 'react';
import AddUsers from './components/User/AddUsers.js';
import UserList from './components/User/UserList.js';

const USER_LIST = [];

const App = () => {
  const [userList, setUserList] = useState(USER_LIST);

  const addUserHandler = (newUser) => {
    setUserList((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <AddUsers onAdd={addUserHandler} />
      <UserList list={userList} />
    </div>
  );
};

export default App;
