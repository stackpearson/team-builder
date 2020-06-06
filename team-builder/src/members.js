import React from 'react';

const Members = props => {
    console.log('props from members', props.members)
    return (
        <div className='member-list'>
            {props.members.map(member => (
            <div className="member-container" key={member.id}>
              <h2>{member.name} | {member.role}</h2>
                <p>{member.email}</p>
            </div>
          ))}
        </div>
        
    )
}

export default Members;