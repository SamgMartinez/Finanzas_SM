import React from "react";

const Titulo: React.FC = () => {

    return (
    <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Finanzas SM</h1>
            <h2 className="text-2xl font-normal mb-8">Administra tus finanzas de manera inteligente</h2>
            <ul className="space-y-4">
                <li className="flex items-center text-lg">
                    <span className="mr-2 text-teal-300">✓</span> Registra tus ingresos y gastos
                </li>
                <li className="flex items-center text-lg">
                    <span className="mr-2 text-teal-300">✓</span> Visualiza reportes detallados
                </li>
                <li className="flex items-center text-lg">
                    <span className="mr-2 text-teal-300">✓</span> Establece metas de ahorro
                </li>
                <li className="flex items-center text-lg">
                    <span className="mr-2 text-teal-300">✓</span> Accede desde cualquier dispositivo
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Titulo;