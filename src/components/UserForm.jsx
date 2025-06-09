import React, { useState, useEffect } from "react";

const emptyFormData = {
  firstName: "",
  lastName: "",
  middleName: "",
  suffix: "",
  age: "",
  birthdate: "",
  address: "",
};

function UserForm({ onSubmit, initialData = null, mode = "add" }) {
  const [formData, setFormData] = useState(initialData || emptyFormData);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(initialData || emptyFormData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameFields = ["firstName", "middleName", "lastName", "suffix"];
    const nameRegex = /^[A-Za-z. ]+$/;

    for (let field of nameFields) {
      const value = formData[field].trim();
      if(value == "") continue;
      if (!nameRegex.test(value)) {
        setError(
          `Invalid ${
            field.charAt(0).toUpperCase() +
            field.slice(1).replace(/([A-Z])/g, " $1")
          }, only letters allowed`
        );
        return;
      }
    }

    const addressRegex = /^[A-Za-z0-9. ]+$/;
    if(!addressRegex.test(formData["address"].trim())) {
      setError("Invalid Address, only letters and numbers allowed");
      return;
    }

    if (parseInt(formData.age) <= 0) {
      setError("Enter a valid age");
      return;
    }

    setError("");
    onSubmit({
      ...formData,
      firstName: formData.firstName.trim(),
      middleName: formData.middleName.trim(),
      lastName: formData.lastName.trim(),
      suffix: formData.suffix.trim(),
      address: formData.address.trim(),
    });
    document.getElementById("form_edit_modal").close();
    setFormData(emptyFormData);
  };

  return (
    <div className="modal-box bg-gray-800 text-white w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            {mode === "edit" ? "Edit User" : "Add User"}
          </h2>
          <button
            type="button"
            onClick={() => document.getElementById("form_edit_modal").close()}
            className="btn btn-sm btn-circle btn-ghost text-white hover:bg-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Names */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["firstName", "middleName", "lastName", "suffix"].map((field) => (
            <div className="flex flex-col" key={field}>
              <label className="text-sm mb-1 text-left">
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")}
                :
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field === "firstName" || field === "lastName"}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
          ))}
        </div>

        {/* Age and Birthdate  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["age", "birthdate"].map((field) => (
            <div className="flex flex-col" key={field}>
              <label className="text-sm mb-1 text-left">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === "birthdate" ? "date" : "number"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-left">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-gray-700 text-white"
          />
        </div>

        {error && <span className="text-red-400 text-sm block">{error}</span>}

        <div className="pt-2 text-right">
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            {mode === "edit" ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
