
import React from 'react';
import KPI from '../components/KPI';
import MetricsChart from '../components/MetricsChart';
import Loader from '../components/Loader';
import { useBalance } from '../hooks/useBalance';
import { useTransactions } from '../hooks/useTransactions';

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useBalance();
  const {
    transactions,
    isLoading: txLoading,
    error: txError,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  } = useTransactions();
  if (isLoading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard Financiero</h1>
        <Loader />
      </div>
    );
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Financiero</h1>
      {/* Filtros existentes */}
      <form className="flex flex-col md:flex-row gap-4 mb-8 items-center bg-white p-4 rounded shadow">
        <div>
          <label className="block text-gray-700 mb-1">Fecha</label>
          <input type="date" className="border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Categoría</label>
          <select className="border rounded p-2">
            <option>Todos</option>
            <option>Ingresos</option>
            <option>Gastos</option>
            <option>Recurrentes</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Filtrar</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="animate-fade-in-up">
          <KPI label="Balance Total" value={error ? 'Error' : `$${data?.balance ?? 0}`} color="bg-green-100" />
        </div>
        <div className="animate-fade-in-up delay-100">
          <KPI label="Gasto Mensual" value="$2,300" color="bg-red-100" />
        </div>
        <div className="animate-fade-in-up delay-200">
          <KPI label="Ingresos Recurrentes" value="$3,000" color="bg-blue-100" />
        </div>
      </div>
      <MetricsChart />

      {/* Tabla y formulario de transacciones en tiempo real */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Transacciones recientes</h2>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          {txLoading ? (
            <span>Cargando transacciones...</span>
          ) : txError ? (
            <span className="text-red-500">
              {typeof txError?.message === 'string' ? txError.message : 'Error al cargar transacciones'}
              { !localStorage.getItem('token') && (
                <>
                  <br />
                  <span className="text-xs text-yellow-600">No has iniciado sesión. Inicia sesión para ver tus transacciones.</span>
                </>
              )}
            </span>
          ) : transactions && transactions.length > 0 ? (
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Categoría</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx: any) => (
                  <tr key={tx.id}>
                    <td>{tx.type}</td>
                    <td>{tx.category}</td>
                    <td>${tx.amount}</td>
                    <td>{new Date(tx.date).toLocaleDateString()}</td>
                    <td>{tx.description}</td>
                    <td>
                      <button className="text-blue-600 mr-2" onClick={() => updateTransaction({ id: tx.id, ...tx })}>Editar</button>
                      <button className="text-red-600" onClick={() => deleteTransaction(tx.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No hay transacciones registradas.</p>
          )}
        </div>
        {/* Formulario simple para crear transacción */}
        <form
          className="mt-4 flex gap-2 flex-wrap"
          onSubmit={e => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = Object.fromEntries(new FormData(form));
            createTransaction({
              type: data.type,
              category: data.category,
              amount: Number(data.amount),
              date: data.date,
              description: data.description,
            });
            form.reset();
          }}
        >
          <select name="type" required className="border rounded px-2 py-1">
            <option value="">Tipo</option>
            <option value="income">Ingreso</option>
            <option value="expense">Gasto</option>
          </select>
          <input name="category" required placeholder="Categoría" className="border rounded px-2 py-1" />
          <input name="amount" required type="number" min="0" placeholder="Monto" className="border rounded px-2 py-1" />
          <input name="date" required type="date" className="border rounded px-2 py-1" />
          <input name="description" placeholder="Descripción" className="border rounded px-2 py-1" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Agregar</button>
        </form>
      </section>

      {/* Comentarios ficticios */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-bold text-blue-700">Comentarios de usuarios</h2>
          <div className="flex-1 h-px bg-blue-200" />
        </div>
        <div className="space-y-4">
          {data?.comments?.map((comment: { user: string; text: string; date: string; rating: number }, idx: number) => (
            <div key={idx} className={`bg-white rounded-lg shadow p-4 flex items-center gap-4 transition duration-300 hover:scale-105 animate-fade-in-up delay-${idx * 100}`}>
              <img src={`https://i.pravatar.cc/40?u=${comment.user}`} alt={comment.user} className="rounded-full w-10 h-10 border-2 border-blue-200" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">{comment.user}</span>
                  <span className="text-xs text-gray-400">{new Date(comment.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-600 mb-2">{comment.text}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
