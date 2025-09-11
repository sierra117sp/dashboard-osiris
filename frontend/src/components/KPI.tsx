import { CurrencyDollarIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

interface KPIProps {
  label: string;
  value: string | number;
  color?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'Balance Total': <CurrencyDollarIcon className="w-8 h-8 text-green-500" />,
  'Gasto Mensual': <ChartBarIcon className="w-8 h-8 text-red-500" />,
  'Ingresos Recurrentes': <ArrowTrendingUpIcon className="w-8 h-8 text-blue-500" />,
};

const KPI: React.FC<KPIProps> = ({ label, value, color = "bg-white" }) => (
  <div className={`rounded-lg shadow p-6 flex items-center gap-4 ${color} transition hover:scale-105 duration-200`}>
    {iconMap[label] || <CurrencyDollarIcon className="w-8 h-8 text-gray-400" />}
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  </div>
);

export default KPI;
