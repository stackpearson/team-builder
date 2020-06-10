import React, { useState } from 'react';

const MemberForm = props => {
    console.log('props from Form', props);

    const [teamMember, setTeamMember] = useState({memberName: 'Enter Name', memberRole: 'Enter Role', memberEmail: 'Enter Email' })

    const changeHandler = event => {
        // console.log(event.target.value)
        // console.log(event.target.name)

        setTeamMember({...teamMember, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewTeamMembers(teamMember)
        setTeamMember({memberName: '', memberRole: '', memberEmail: ''});
    }

    return (
        <form onSubmit={submitForm}>

            <h2>Welcome! Please enter Your Information Here:</h2>
            <div className="form-container">
                <div className="form-entries">
                    <label hmtlFor='memberName'>Name: </label>
                    <input id='memberName' type='text' placeholder='Enter Name' onChange={changeHandler} value={teamMember.memberName} name='memberName' />
                </div>
                <div className="form-entries">
                    <label hmtlFor='memberRole'>Role: </label>
                    <input id='memberRole' type='text' name='memberRole' placeholder='Enter Role' onChange={changeHandler} value={teamMember.memberRole} name='memberRole' />
                </div>
                <div className="form-entries">
                    <label hmtlFor='memberEmail'>Email: </label>
                    <input id='memberEmail' type='text' name='memberEmail' placeholder='Enter Email' onChange={changeHandler} value={teamMember.memberEmail} name='memberEmail' />
                </div>
            </div>
            <button type='submit'>Add My Info</button>
            
        </form>
    )
}

export default MemberForm;
