import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Ene', balance: 12000 },
  { date: 'Feb', balance: 12500 },
  { date: 'Mar', balance: 13000 },
  { date: 'Abr', balance: 12800 },
  { date: 'May', balance: 13500 },
];

const MetricsChart: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 transition hover:shadow-2xl">
    <h2 className="text-lg font-bold mb-4">Balance Mensual</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MetricsChart;
