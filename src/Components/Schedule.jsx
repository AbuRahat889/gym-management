"use client";

import Image from "next/image";
import React, { useState } from "react";

const Schedule = () => {
  const scheduleData = {
    Mon: [
      {
        time: "9:00am - 11:00am",
        activity: "FITNESS",
        trainer: {
          name: "John Doe",
          designation: "Fitness Trainer",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
      {
        time: "4:00pm - 6:00pm",
        activity: "RUNNING",
        trainer: {
          name: "Emily Johnson",
          designation: "Running Coach",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
    ],
    Tue: [
      {
        time: "9:00am - 11:00am",
        activity: "BOXING",
        trainer: {
          name: "Mike Tyson",
          designation: "Boxing Trainer",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
    ],
    Wed: [
      {
        time: "9:00am - 11:00am",
        activity: "CYCLING",
        trainer: {
          name: "Anna Smith",
          designation: "Cycling Coach",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
      {
        time: "10:00am - 12:00pm",
        activity: "BODY BUILDING",
        trainer: {
          name: "Arnold Schwarzenegger",
          designation: "Bodybuilding Coach",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
    ],
    Thu: [
      {
        time: "11:00am - 1:00pm",
        activity: "YOGA",
        trainer: {
          name: "Sophia Brown",
          designation: "Yoga Instructor",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
    ],
    Fri: [
      {
        time: "9:00am - 11:00am",
        activity: "KARATE",
        trainer: {
          name: "Bruce Lee",
          designation: "Martial Arts Trainer",
          image: "https://i.ibb.co.com/QQtCMqv/avater.png",
          profileLink: "#",
        },
      },
    ],
    Sat: [
      {
        time: "10:00am - 12:00pm",
        activity: "MEDITATION",
        trainer: {
          name: "Lily Evans",
          designation: "Meditation Coach",
          image: "https://via.placeholder.com/50",
          profileLink: "#",
        },
      },
    ],
    Sun: [
      {
        time: "10:00am - 12:00pm",
        activity: "BODY BUILDING",
        trainer: {
          name: "Chris Hemsworth",
          designation: "Strength Coach",
          image: "https://via.placeholder.com/50",
          profileLink: "#",
        },
      },
    ],
  };

  const days = Object.keys(scheduleData);

  const [tooltip, setTooltip] = useState({
    visible: false,
    data: null,
    position: { x: 0, y: 0 },
  });

  const showTooltip = (event, data) => {
    setTooltip({
      visible: true,
      data,
      position: { x: event.clientX, y: event.clientY },
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, data: null, position: { x: 0, y: 0 } });
  };

  return (
    <div className="min-h-screen">
      {tooltip.visible && tooltip.data && (
        <div
          className="absolute z-50 p-6 bg-white shadow-lg rounded-lg text-gray-900"
          style={{
            top: tooltip.position.y + 10,
            left: tooltip.position.x + 10,
          }}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={tooltip.data.trainer.image}
              alt={tooltip.data.trainer.name}
              className="w-12 h-12 rounded-full"
              width={100}
              height={100}
            />
            <div>
              <h4 className="font-bold text-lg">{tooltip.data.trainer.name}</h4>
              <p className="text-sm text-red-500 font-semibold">
                {tooltip.data.trainer.designation}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="table-auto border w-full bg-black text-white text-left">
          <thead>
            <tr className="bg-gray-800 text-white text-lg">
              <th className="border px-6 py-4">Time</th>
              {days.map((day) => (
                <th key={day} className="border px-6 py-4">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((_, timeIndex) => {
              const startHour = 9 + timeIndex * 2;
              if (startHour > 21) return null;
              const timeSlot = `${startHour % 12 || 12}:00${
                startHour >= 12 ? "pm" : "am"
              } - ${(startHour + 2) % 12 || 12}:00${
                startHour + 2 >= 12 ? "pm" : "am"
              }`;

              return (
                <tr key={timeIndex}>
                  <td className="border px-6 py-4 font-bold text-gray-300">
                    {timeSlot}
                  </td>
                  {days.map((day) => {
                    const activity = scheduleData[day].find(
                      (slot) => slot.time === timeSlot
                    );
                    return (
                      <td
                        key={`${day}-${timeSlot}`}
                        className="border px-6 py-4 text-center cursor-pointer"
                        onMouseEnter={(e) =>
                          activity && showTooltip(e, activity)
                        }
                        onMouseLeave={hideTooltip}
                      >
                        {activity ? (
                          <span
                            className={`font-bold ${
                              activity.activity === "FITNESS"
                                ? "text-red-500"
                                : activity.activity === "BODY BUILDING"
                                ? "text-blue-500"
                                : activity.activity === "CYCLING"
                                ? "text-green-500"
                                : "text-yellow-500"
                            }`}
                          >
                            {activity.activity}
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
