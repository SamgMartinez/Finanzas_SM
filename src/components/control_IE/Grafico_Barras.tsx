import React, {useEffect, useRef} from 'react';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grafico_Barras: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  const data = [
    { 
      nombreGasto: 'Gasto 1',
      valorGasto: 1000
    },
    { 
      nombreGasto: 'Gasto 2',
      valorGasto: 2000
    },
    { 
      nombreGasto: 'Gasto 3',
      valorGasto: 3000
    }
  ];

  useEffect(() => {
    if(chartRef.current && chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "bar", // Tipo de gráfico
        data: {
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
          datasets: [
            {
              label: "Ventas ($)",
              data: [500, 700, 800, 600, 900],
              backgroundColor: "rgba(54, 162, 235, 0.5)", // Color de las barras
              borderColor: "rgba(54, 162, 235, 1)", // Color del borde
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Ventas Mensuales",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
    
  );
}

export default Grafico_Barras;