import React from "react";

const DeleteModal = ({ onDelete, userId }) => {
  const closeModal = () => {
    document.getElementById("form_delete_modal").close();
  };

  const handleDelete = () => {
    onDelete(userId);
    closeModal();
  };

  return (
    <div className="modal-box bg-gray-800 text-white w-2xl">
      {/* Header */}

      <h2 className="text-xl font-bold">
        {`Are you sure you want to delete User ${userId+1}?`}
      </h2>

      {/* Action Buttons */}
      <div className="flex mt-5 justify-end gap-2">
        <button
          onClick={handleDelete}
          className="btn bg-red-600 hover:bg-red-700 text-white font-semibold"
        >
          Delete
        </button>
        <button
          onClick={closeModal}
          className="btn bg-gray-600 hover:bg-gray-700 text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
