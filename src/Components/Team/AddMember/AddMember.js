import React from 'react';

const AddMember = props => {
    const addMember = props.addMember;

    return (
        <div>
            <p>TotalMembers: {addMember.length}</p>
            {
                addMember.map(member => <li>{member.name.first + " " + member.name.last}</li>)
            }
        </div>
    );
};

export default AddMember;