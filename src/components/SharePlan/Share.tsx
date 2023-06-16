"use client"
import React, { useState } from 'react';
import { Table } from 'antd';
;

type Plan = {
  name: string;
  location: string;
  numberOfDays: number;
  costPerHead: number;
  bestTimeToVisit: string;
};

const plans: Plan[] = [
  {
    name: 'Goa Trip',
    location: 'Bage Beach',
    numberOfDays: 5,
    costPerHead: 500,
    bestTimeToVisit: 'Spring',
  },
  {
    name: 'Mysuru Trip ',
    location: 'Mysuru',
    numberOfDays: 7,
    costPerHead: 250,
    bestTimeToVisit: 'Summer',
  },
  {
    name: 'Agra Trip',
    location: 'Delhi',
    numberOfDays: 3,
    costPerHead: 800,
    bestTimeToVisit: 'Winter',
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
      title: 'Plan Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Number of Days',
      dataIndex: 'numberOfDays',
      key: 'numberOfDays',
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
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-button font-bold mb-4">Shared Plan </h1>
      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-md p-4 cursor-pointer"
            onClick={() => handleClick(plan)}
          >
            <h2 className="text-lg border border-button bg-white text-button text-center pt-4 rounded-md pb-4 font-bold mb-2">{plan.name}</h2>
           
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-4">
          <h2 className="text-lg text-button font-bold mb-2">{selectedPlan.name}</h2>
          <Table
          
            dataSource={[selectedPlan]}
            columns={columns }
            pagination={false}
          />
          <button
            className="mt-4 bg-button  text-white font-bold py-2 px-4 rounded-md"
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
