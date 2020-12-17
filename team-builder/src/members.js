import React from 'react';
import MemberForm from './Form';

const Members = props => {
    console.log('props from members', props)
    return (
        <div className='member-list'>
            {props.teamMembers.map(member => (
            <div className="member-container" key={member.id}>
                <h2>{member.memberName} | {member.memberRole}</h2>
                <p>{member.memberEmail}</p>
                <button type='submit' onClick={props.memberToEdit}>Edit</button>
                
            </div>
          ))}

        </div>
        
    )
}

export default Members;