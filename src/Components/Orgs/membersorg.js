import React from "react";
import { useRemoveMemberOrg } from "../../hooks/Orgs/useRemoveMemberOrg";

const MembersOrg = ({member}) => {
  const { removeMemberOrg } = useRemoveMemberOrg()

  const onRemoveMember = (e) => {
    e.preventDefault()
    removeMemberOrg({
      userID: member.user_id
    })
  }
  return (
    <div className="flex justify-between">
      <div>
      <div>
            <p>{member.username}</p>
            </div>
            <div>
            <p className="text-sm">{member.name}</p>
            </div>
      </div>
      <div>
      <button 
          className="text-white font-semibold rounded-md ml-8 p-1 bg-danger"
          onClick={ onRemoveMember }
          >
          Remove User
        </button>
      </div>
    </div>
  );
};

export default MembersOrg;