'use client'

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Prefill form with current user info (except passwords)
  useEffect(() => {
  if (user) {
    const [first, ...rest] = (user.name || "").split(" ");
    const last = rest.join(" ");
    setFormData((prev) => ({
      ...prev,
      firstname: first || "",
      lastname: last || "",
      email: user.email || "",
      phone: user.phone || "",
    }));
  }
}, [user]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);

      // Clear password fields after update
      setFormData((prev) => ({
        ...prev,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));

      alert("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Update failed!");
    }
  };

  return (
    <div className="w-full max-w-[800px] rounded-[4px] shadow-md flex flex-col gap-5 p-8 md:p-10 mx-auto">
      <h2 className="text-[#DB4444] text-[20px] font-medium leading-[28px]">
        Edit Your Profile
      </h2>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div className="flex flex-col gap-4">
          <label>Password</label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="Current password"
            className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          />
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New password"
            className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
          <button
            type="button"
            className="px-4 py-2 rounded-[4px] text-[16px] font-medium border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#DB4444] text-white px-4 py-2 rounded-[4px] text-[16px] font-medium hover:bg-[#b63535] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
