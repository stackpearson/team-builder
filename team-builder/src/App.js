import React, { useState } from 'react';
import './App.css';
import Members from './members';

function App() {
const [teamMembers, setTeamMembers] = useState([
  {
    id: 0,
    name: 'John Doe',
    email: 'John_Doe@gmail.com',
    role: 'CEO'
  }
]);

// const addNewTeamMembers = member => {
//   setTeamMembers([...teamMembers, {...teamMembers, id: Date.now()}])
// }
  return (
    <div className="App">
      <h1>Our Team Members</h1>
      {/* <Form addNewTeamMember={addNewTeamMember} /> */}
      <div class="member-list-container">
        <Members members={teamMembers} />
      </div>
      
    </div>
  );
}

export default App;
