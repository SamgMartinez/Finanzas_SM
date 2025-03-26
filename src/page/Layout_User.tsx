import React from 'react';
import logo from '../assets/logo_original.png';
import {Coins, TrendingUp, TrendingDown } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const Control_IE: React.FC = () => {
return (
    <>
        <div className="w-full bg-blue-900 text-white p-4 flex items-center justify-between mx-auto rounded-xl shadow-lg">
            {/* Left Section with Icon */}
            <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
                <figure className='max-w-[100px]'>
                    <img src={logo} alt="Logo" />
                </figure>
            </div>
            <div>
                <h2 className="text-sm font-light">Control de Ingresos & Finanzas Personales</h2>
            </div>
            </div>

            {/* Metrics Section */}
            <div className="flex items-center space-x-4">
            {/* Ingresos */}
            <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <div className="text-right">
                <p className="text-xs text-gray-300">Ingresos</p>
                <p className="font-bold text-green-400">14.926</p>
                </div>
            </div>

            {/* Egresos */}
            <div className="flex items-center space-x-2">
                <TrendingDown className="w-6 h-6 text-red-400" />
                <div className="text-right">
                <p className="text-xs text-gray-300">Egresos Totales</p>
                <p className="font-bold text-red-400">14.456</p>
                </div>
            </div>

            {/* Saldo */}
            <div className="flex items-center space-x-2">
                <div className="text-right">
                <p className="text-xs text-gray-300">Saldo</p>
                <p className="font-bold text-blue-300">470</p>
                </div>
            </div>

            {/* Coins Icon */}
            <div className="bg-white/10 p-3 rounded-lg">
                <Coins className="w-6 h-6 text-yellow-400" />
            </div>
            </div>
        </div>
        <div>
            <Outlet />
        </div>
    </>   
  );
};

export default Control_IE;

