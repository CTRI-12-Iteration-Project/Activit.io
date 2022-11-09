import React from 'react';

/*
Bugs
When you hit 'Add Team Member' - it triggers createTeam()
  This was temporarily negated by having new member entry fields be required
When you hit 'Delete Member' - it triggers createTeam()
  Can be replicated even if hitting delete when no new member fields are available
  ONLY triggers createTeam() if Team name 
*/

// Deconstruct props -> memberLength, memberEntries, deleteMember, addMember, setMember
const CreateMemberButtons = ({
  memberLength,
  memberEntries,
  deleteMember,
  addMember,
  setMemberLength,
}) => {
  console.log('memberLength', memberLength);
  console.log('memberEntires', memberEntries);
  return (
    <div>
      <button
        onClick={() => {
          if (memberEntries.length) {
            setMemberLength(memberLength - 1);
            deleteMember();
          } else {
            alert("Don't delete yourself!");
          }
        }}
      >
        Delete Member
      </button>
      <button
        onClick={() => {
          if (memberLength === 4)
            alert(`
            Too many friends!
            Focus on the ones you have here!
          `);
          else {
            setMemberLength(memberLength + 1);
            addMember();
          }
        }}
      >
        Add Team Member
      </button>
    </div>
  );
};

export default CreateMemberButtons;
