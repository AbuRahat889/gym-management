"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    time: "",
    activity: "",
    trainerName: "",
    trainerDesignation: "",
    trainerImage: "",
    trainerProfileLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle the form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="e.g., 9:00am - 11:00am"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="activity"
            className="block text-sm font-medium text-gray-700"
          >
            Activity
          </label>
          <input
            type="text"
            id="activity"
            name="activity"
            placeholder="e.g., Boxing"
            value={formData.activity}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="trainerName"
            className="block text-sm font-medium text-gray-700"
          >
            Trainer Name
          </label>
          <input
            type="text"
            id="trainerName"
            name="trainerName"
            placeholder="e.g., Mike Tyson"
            value={formData.trainerName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="trainerDesignation"
            className="block text-sm font-medium text-gray-700"
          >
            Trainer Designation
          </label>
          <input
            type="text"
            id="trainerDesignation"
            name="trainerDesignation"
            placeholder="e.g., Boxing Trainer"
            value={formData.trainerDesignation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="trainerImage"
            className="block text-sm font-medium text-gray-700"
          >
            Trainer Image URL
          </label>
          <input
            type="url"
            id="trainerImage"
            name="trainerImage"
            placeholder="e.g., https://i.ibb.co/QQtCMqv/avater.png"
            value={formData.trainerImage}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="trainerProfileLink"
            className="block text-sm font-medium text-gray-700"
          >
            Trainer Profile Link
          </label>
          <input
            type="url"
            id="trainerProfileLink"
            name="trainerProfileLink"
            placeholder="e.g., #"
            value={formData.trainerProfileLink}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 p-2 bg-rose-500 text-white rounded-md hover:bg-rose-400"
      >
        Submit
      </button>
    </form>
  );
}
