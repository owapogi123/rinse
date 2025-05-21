import React from 'react';
import SidebarAdmin from './SidebarAdmin';

const machines = Array.from({ length: 30 }, (_, i) => ({
  number: i + 1,
  status: Math.random() > 0.5 ? 'occupied' : 'vacant',
}));

export default function Machine() {
  return (
    <div className="flex">
      <SidebarAdmin />
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Machine Status</h1>
        <div className="grid grid-cols-5 gap-4">
          {machines.map((machine) => (
            <div
              key={machine.number}
              className={`rounded-lg p-4 shadow text-white text-center font-semibold ${
                machine.status === 'occupied' ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              Machine {machine.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
