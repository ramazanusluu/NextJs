import React from "react";
import User from "./User";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div className="grid" key={user.id}>
          <User user={user} />
        </div>
      ))}
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
          }
        `}
      </style>
    </div>
  );
}

export default UserList;
