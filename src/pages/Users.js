import Table from "../component/Table";
import User from "../component/User";
import Delete from '../component/Delete';
import Course from '../component/Course';
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
      />
      <User />
      <Course />
      <QuestionAttempt />

    </>
  );
};

export default Users;
