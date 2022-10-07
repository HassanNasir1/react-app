import Table from "../component/Table";
import User from "../component/User";
import QuestionAttempt from '../component/QuestionAttempt';
import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../api/user";

const Users = () => {
  const [users, setUsers] = useState([]);
  function onDeleteRow(id) {
   return deleteUser(id).then((response) => {
      const newUsers = users.filter((user) => {
        return user._id != id;
      });
      setUsers(newUsers);
      return true
    }).catch((err) => {
        return false;
    });
  }

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response);
        //console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const headings = ["Name", "Email", "Type", "Action"];

  const schema = ["name", "email", "userType"];

  return (
    <>
      <Table
        headings={headings}
        data={users}
        schema={schema}
        onDeleteRow={onDeleteRow}
        name={"Users"}
      />
      <User />
      <QuestionAttempt />

    </>
  );
};

export default Users;
