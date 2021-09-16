import React from 'react'
import User from './components/User'
import UserList from './components/UserList'
import './index.css'
import 'normalize.css'

function App() {
  return (
    <div className="App">
      <>
        <div className="my">
          <User />
        </div>
        <div className="my">
          <UserList />
        </div>
      </>
    </div>
  );
}

export default App;
