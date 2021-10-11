import React from 'react'
import User from './components/User'
import UserList from './components/UserList'
import './index.css'
import 'normalize.css'

function App() {
  return (
    <div className="App">
      <>
        <div>
          <User />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <UserList />
        </div>
      </>
    </div>
  );
}

export default App;
