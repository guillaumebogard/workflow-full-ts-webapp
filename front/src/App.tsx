import { useEffect, useState } from 'react';
import './App.css';

import type User from './api/user';
import type Users from './api/users';

import {
  RequestDataUserCreate,
  RequestDataUserGetById,
  RequestDataUserUpdate,
  RequestDataUserDelete,
} from './api/user/requestsData';

import {
  ResponseDataUserCreate,
  ResponseDataUserGetById,
  ResponseDataUserUpdate,
  ResponseDataUserDelete,
} from './api/user/responsesData';

import {
  ResponseDataUsersGet
} from './api/users/responsesData';

import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from './api/user/routes';

import { getAllUsers } from './api/users/routes';

export default function App() {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    getAllUsers().then((responseData: ResponseDataUsersGet) => {
      setUsers(responseData.data.users);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
