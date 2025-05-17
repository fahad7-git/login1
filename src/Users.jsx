const Users = ({ users = [], setUsers }) => {
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  console.log("Current users:", users);

  return (
    <div className="absolute left-[78%] top-[30%] max-w-sm mx-8 p-4 text-white rounded-lg shadow-xl bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>

      <div className="max-h-80 overflow-auto">
        {users.length > 0 ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="flex justify-between items-center p-3 bg-gray-700 rounded-md shadow">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{user.name}</span>
                  <small className="text-gray-300">{user.email}</small>
                </div>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-400 hover:text-red-600 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center text-lg text-red-400 mt-4">Data Not Found!</h1>
        )}
      </div>
    </div>
  );
};

export default Users;