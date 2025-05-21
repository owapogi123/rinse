import React from 'react';
import SidebarAdmin from './SidebarAdmin';

// Extended dummy reservation data
const reservations = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    service: 'Fold',
    date: '2025-05-22 08:30 AM',
    machine: "-",
    kilos: null,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    service: 'Wash & Dry',
    date: '2025-05-22 09:00 AM',
    machine: 3,
    kilos: 5,
  },
  {
    id: '3',
    name: 'Alice Garcia',
    email: 'alice@example.com',
    service: 'Press',
    date: '2025-05-22 09:15 AM',
    machine: '-',
    kilos: null,
  },
];

export default function ReserveQueue() {
  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Reservation Queue</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 shadow-sm rounded-lg">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Service</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Machine</th>
                <th className="px-4 py-2 border">Kilos</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{res.id}</td>
                  <td className="px-4 py-2 border">{res.name}</td>
                  <td className="px-4 py-2 border">{res.email}</td>
                  <td className="px-4 py-2 border">{res.service}</td>
                  <td className="px-4 py-2 border">{res.date}</td>
                  <td className="px-4 py-2 border">{res.machine ? `Machine ${res.machine}` : '—'}</td>
                  <td className="px-4 py-2 border">{res.kilos ? `${res.kilos} kg` : '—'}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                      Approve
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
