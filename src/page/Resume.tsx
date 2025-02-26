import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar componentes necesarios para Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Tipos para los datos (puedes moverlos a un archivo separado como types.ts)
interface Transaction {
  id: number;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  subcategory: string;
  date: string;
}

const Resume: React.FC = () => {
  // Estado para el mes y período fiscal actual
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Datos simulados (puedes reemplazarlos con una API o estado global)
  const transactions: Transaction[] = [
    { id: 1, amount: 500, type: 'income', category: 'Salario', subcategory: 'Mensual', date: '2025-02-01' },
    { id: 2, amount: 100, type: 'expense', category: 'Comida', subcategory: 'Restaurante', date: '2025-02-02' },
    { id: 3, amount: 200, type: 'expense', category: 'Transporte', subcategory: 'Gasolina', date: '2025-02-03' },
  ];

  // Calcular ingresos y gastos totales
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  // Datos para el gráfico circular (agrupados por categoría)
  const chartData = {
    labels: ['Salario', 'Comida', 'Transporte'], // Puedes dinámicamente generar esto
    datasets: [
      {
        data: [500, 100, 200], // Valores simulados
        backgroundColor: ['#34D399', '#F87171', '#60A5FA'], // Colores para ingresos y gastos
        hoverOffset: 4,
      },
    ],
  };

  // Opciones del gráfico
  const chartOptions = {
    plugins: {
      legend: { position: 'bottom' as const },
    },
  };

  // Funciones para navegar entre meses
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Función para navegar entre períodos fiscales (simulado como años)
  const prevFiscalPeriod = () => setCurrentYear(currentYear - 1);
  const nextFiscalPeriod = () => setCurrentYear(currentYear + 1);

  // Formatear el nombre del mes
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const currentMonthName = monthNames[currentMonth];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sección de Resumen (Izquierda) */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Resumen - {currentMonthName} {currentYear}
          </h1>

          {/* Resumen de Ingresos y Gastos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Ingresos Totales</h2>
              <p className="text-2xl font-bold text-green-500">${totalIncome}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Gastos Totales</h2>
              <p className="text-2xl font-bold text-red-500">${totalExpenses}</p>
            </div>
          </div>

          {/* Botones de Navegación */}
          <div className="flex space-x-4">
            <button
              onClick={prevMonth}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Mes Anterior
            </button>
            <button
              onClick={nextMonth}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Mes Siguiente
            </button>
            <button
              onClick={prevFiscalPeriod}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Período Fiscal Anterior
            </button>
            <button
              onClick={nextFiscalPeriod}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Período Fiscal Siguiente
            </button>
          </div>
        </div>

        {/* Sección de Gráfico y Últimos Gastos (Derecha) */}
        <div className="space-y-6">
          {/* Gráfico Circular */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Distribución</h2>
            <Pie data={chartData} options={chartOptions} />
          </div>

          {/* Últimos Gastos */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Últimos Movimientos</h2>
            <ul className="space-y-2">
              {transactions.slice(0, 5).map((transaction) => (
                <li
                  key={transaction.id}
                  className="flex justify-between text-sm text-gray-600"
                >
                  <span>{transaction.category} - {transaction.subcategory}</span>
                  <span
                    className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}
                  >
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;