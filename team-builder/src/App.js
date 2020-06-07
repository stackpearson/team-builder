import React, { useState } from 'react';
import './App.css';
import Members from './members';
import MemberForm from './Form';

function App() {
const [teamMembers, setTeamMembers] = useState([
  {
    id: 0,
    memberName: 'John Doe',
    memberEmail: 'John_Doe@gmail.com',
    memberRole: 'CEO'
  }
]);

const addNewTeamMembers = member => {
  
  setTeamMembers([...teamMembers, {...member, id: Date.now() }])
}
  return (
    <div className="App">
      
      <MemberForm addNewTeamMembers={addNewTeamMembers} />
      <div class="member-list-container">
      <h1>Our Team Members</h1>
        <Members teamMembers={teamMembers} />
      </div>
      
    </div>
  );
}

export default App;
