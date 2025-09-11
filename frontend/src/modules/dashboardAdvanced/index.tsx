// Dashboard avanzado: gráficas, KPIs, filtros, exportación
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AISuggestions from '../aiSuggestions';

const data = [
  { name: 'Enero', ingresos: 4000, gastos: 2400 },
  { name: 'Febrero', ingresos: 3000, gastos: 1398 },
  { name: 'Marzo', ingresos: 2000, gastos: 9800 },
  { name: 'Abril', ingresos: 2780, gastos: 3908 },
];

const radarData = [
  { subject: 'Ahorro', A: 120, B: 110, fullMark: 150 },
  { subject: 'Gasto', A: 98, B: 130, fullMark: 150 },
  { subject: 'Ingreso', A: 86, B: 130, fullMark: 150 },
];

const pieData = [
  { name: 'Alimentos', value: 400 },
  { name: 'Transporte', value: 300 },
  { name: 'Entretenimiento', value: 300 },
  { name: 'Otros', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardAdvanced() {
  const [filtro, setFiltro] = useState('Todos');
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard avanzado</h1>
      <div>
        <label className="mr-2">Filtrar por mes:</label>
        <select value={filtro} onChange={e => setFiltro(e.target.value)} className="border rounded px-2 py-1">
          <option>Todos</option>
          {data.map(d => <option key={d.name}>{d.name}</option>)}
        </select>
        <button className="ml-4 px-3 py-1 bg-blue-600 text-white rounded">Exportar</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-2">Gráfico de barras</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={filtro === 'Todos' ? data : data.filter(d => d.name === filtro)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ingresos" fill="#8884d8" />
              <Bar dataKey="gastos" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Gráfico de líneas</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ingresos" stroke="#8884d8" />
              <Line type="monotone" dataKey="gastos" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Gráfico de área</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="ingresos" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="gastos" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Gráfico radar</h2>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart cx="50%" cy="50%" outerRadius="80" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Gráfico de pastel</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <AISuggestions />
    </div>
  );
}
