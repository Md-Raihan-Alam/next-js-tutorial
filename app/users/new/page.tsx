import React, { Suspense } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const NewUserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //cahcing available
  // const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:'no-store'}); no caching
  // const res = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}}); take for data every 10 sec
  const users: User[] = await res.json();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> dyanamic rendaring */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Suspense>
  );
};

export default NewUserPage;
