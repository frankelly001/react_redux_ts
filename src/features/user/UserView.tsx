import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  // const dispatch = useDispatch();
  // // to access data from store
  // const user = useSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // to access data from store
  const user = useAppSelector((state) => state.user);

  console.log(user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>list of users</h2>
      {user.loading && <h1>Loading...</h1>}
      {!user.loading && user.error ? <h3>Error: {user.error} </h3> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
