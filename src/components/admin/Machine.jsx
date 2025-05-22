import React, { useEffect, useState } from "react";
import SidebarAdmin from "./SidebarAdmin";

export default function Machine() {
  const [machines, setMachines] = useState([]);
  const [machineNumber, setMachineNumber] = useState("");

  useEffect(() => {
    fetchMachines();
  }, []);

  const fetchMachines = async () => {
    const res = await fetch("http://localhost:3000/machines");
    const data = await res.json();
    setMachines(data);
  };

  const addMachine = async () => {
    if (!machineNumber.trim()) return;

    await fetch("http://localhost:3000/machines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ machineNumber }),
    });

    setMachineNumber("");
    fetchMachines();
  };

  const deleteMachine = async (id) => {
    await fetch(`http://localhost:3000/machines/${id}`, {
      method: "DELETE",
    });

    fetchMachines();
  };

  const toggleAvailability = async (id) => {
    await fetch(`http://localhost:3000/machines/${id}/toggle`, {
      method: "PATCH",
    });
    fetchMachines();
  };

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-bold mb-4">Machines</h2>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Machine Number"
            value={machineNumber}
            onChange={(e) => setMachineNumber(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <button
            onClick={addMachine}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Machine
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="border p-4 rounded shadow flex flex-col items-center justify-between"
            >
              <img
                src="/laundry-machine-icon.png"
                className="w-[80px]"
                alt=""
              />
              <div className="font-semibold">
                machine {machine.machineNumber}
              </div>
              <div
                className={`text-sm ${machine.isAvailable ? "text-green-600" : "text-red-600"}`}
              >
                {machine.isAvailable ? "Available" : "Unavailable"}
              </div>
              <button
                onClick={() => deleteMachine(machine.id)}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Remove
              </button>

              <button
                onClick={() => toggleAvailability(machine.id)}
                className="mt-1 bg-yellow-500 text-white px-2 py-1 rounded text-sm"
              >
                Toggle
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
