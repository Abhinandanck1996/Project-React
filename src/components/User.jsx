import React from "react";

const User = ({ avatar_url, login, html_url, repos_url }) => {
  return (
    <tr>
      <td>
        <img src={avatar_url} alt={login} />
      </td>
      <td>{login}</td>
      <td>{repos_url}</td>
      <td>
        <a href={html_url} target="_blank">
          View Profile
        </a>
      </td>
    </tr>
  );
};

export default User;
