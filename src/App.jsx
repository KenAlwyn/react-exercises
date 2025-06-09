import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Table from "./components/Table";

const sampleTabData = [];

function App() {
  const [users, setUsers] = useState([...sampleTabData]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [formMode, setFormMode] = useState("add");

  const handleAdd = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleEdit = (updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[selectedUserIndex] = updatedUser;
    setUsers(updatedUsers);
    setSelectedUserIndex(null);
  };

  const handleDelete = (indexToRemove) => {
    const updatedUsers = users.filter((_, idx) => idx !== indexToRemove);
    setUsers(updatedUsers);
  };

  const openAddModal = () => {
    setFormMode("add");
    setSelectedUserIndex(null);
    document.getElementById("form_edit_modal").showModal();
  };

  const openEditModal = (index) => {
    setFormMode("edit");
    setSelectedUserIndex(index);
    document.getElementById("form_edit_modal").showModal();
  };

  return (
    <div className="App">
      <div className="flex justify-start ml-3">
        <button
          className="btn bg-green-600 text-white hover:bg-green-700"
          onClick={openAddModal}
        >
          Add User
        </button>
      </div>

      <Table tabData={users} onEdit={openEditModal} onDelete={handleDelete} />

      <dialog id="form_edit_modal" className="modal">
        <UserForm
          key={formMode === "edit" ? selectedUserIndex : "add"}
          onSubmit={formMode === "edit" ? handleEdit : handleAdd}
          initialData={formMode === "edit" ? users[selectedUserIndex] : null}
          mode={formMode}
        />
      </dialog>
    </div>
  );
}

export default App;
