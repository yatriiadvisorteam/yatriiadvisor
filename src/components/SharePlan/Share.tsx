"use client"
import React, { useState } from 'react';
import { Table } from 'antd';

type Plan = {
  name: string;
  location: string;
  Day: number;
  costPerHead: number;
  bestTimeToVisit: string;
  openTime: string;
  closeTime: string;
};

const plans: Plan[] = [
  {
    name: 'Goa Trip',
    location: 'Bage Beach',
    Day: 1,
    costPerHead: 500,
    bestTimeToVisit: '5PM',
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
  },
  {
    name: 'Goa Trip',
    location: 'Morjim',
    Day: 1,
    costPerHead: 700,
    bestTimeToVisit: '11Am',
    openTime: '10:00 AM',
    closeTime: '7:00 PM',
  },
  {
    name: 'Goa Trip',
    location: 'Calangute',
    Day: 2,
    costPerHead: 500,
    bestTimeToVisit: '5PM',
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
  },
  {
    name: 'Goa Trip',
    location: 'Anjuna',
    Day: 2,
    costPerHead: 700,
    bestTimeToVisit: '11Am',
    openTime: '10:00 AM',
    closeTime: '7:00 PM',
  },
  {
    name: 'Mysuru Trip',
    location: 'Chamundi hills',
    Day : 1,
    costPerHead: 250,
    bestTimeToVisit: '9AM',
    openTime: '8:30 AM',
    closeTime: '5:30 PM',
  },
  {
    name: 'Mysuru Trip',
    location: 'Mysuru palace',
    Day : 1,
    costPerHead: 250,
    bestTimeToVisit: '12Pm',
    openTime: '8:30 AM',
    closeTime: '6:30 PM',
  },
  {
    name: 'Mysuru Trip',
    location: 'Mysuru Zoo',
    Day : 2,
    costPerHead: 250,
    bestTimeToVisit: '3PM',
    openTime: '8:00 AM',
    closeTime: '6:00 PM',
  },
  {
    name: 'Mysuru Trip',
    location: 'KRS Dam',
    Day : 2,
    costPerHead: 250,
    bestTimeToVisit: '7PM',
    openTime: '6:30 AM',
    closeTime: '11:30 PM',
  },

];

const ShareApp: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleClose = () => {
    setSelectedPlan(null);
  };

  const columns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Day',
      dataIndex: 'Day',
      key: 'Day',
    },
    {
      title: 'Cost per Head',
      dataIndex: 'costPerHead',
      key: 'costPerHead',
    },
    {
      title: 'Best Time to Visit',
      dataIndex: 'bestTimeToVisit',
      key: 'bestTimeToVisit',
    },
    {
      title: 'Open Time',
      dataIndex: 'openTime',
      key: 'openTime',
    },
    {
      title: 'Close Time',
      dataIndex: 'closeTime',
      key: 'closeTime',
    },
  ];

  const getTripRows = (name: string) => {
    return plans.filter((plan) => plan.name === name);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-button font-bold mb-4">Shared Plan</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from(new Set(plans.map((plan) => plan.name))).map((name) => (
          <div
            key={name}
            className="border rounded-md p-4 cursor-pointer"
            onClick={() => handleClick(getTripRows(name))}
          >
            <h2 className="text-lg border border-button bg-white text-button text-center pt-4 rounded-md pb-4 font-bold mb-2">
              {name}
            </h2>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-4">
          <h2 className="text-lg text-button font-bold mb-2">{selectedPlan[0].name}</h2>
          <Table dataSource={selectedPlan} columns={columns} pagination={false} />
          <button
            className="mt-4 bg-button text-white font-bold py-2 px-4 rounded-md"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareApp;
