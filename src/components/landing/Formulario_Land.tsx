import React,  {useState}  from "react";
import { ValidateLogin, Register } from "../../api/usuario";

const Formulario_Land: React.FC = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
      }

      if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
      }
      if (!isLoginForm && name.length < 2) {
        alert('Por favor, introduce un nombre válido.');
        return;
      }

      if (isLoginForm) {
        // Lógica para iniciar sesión
        let response = await ValidateLogin(email, password);
        if (!response){
          alert('Error al iniciar sesión'); 
        }else{
          alert('Inicio de sesión correcto');
        }
      } else {
        // Lógica para registrarse
        if (await Register(email, password, name) == false){
          alert('Error al registrarse');
        }else{
          alert('Registro correcto');
        }
      }
  };
  
  return(
  <div className="flex-1 bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 md:p-8 bg-white rounded-lg shadow-md">
          {/* Tabs de navegación */}
          <div className="flex mb-8 border-b">
              <button 
                  className={`flex-1 pb-3 text-base font-medium transition-colors duration-300 ${
                  isLoginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setIsLoginForm(true)}
        >
          Iniciar Sesión
        </button>
        <button 
          className={`flex-1 pb-3 text-base font-medium transition-colors duration-300 ${
            !isLoginForm 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500'
          }`}
          onClick={() => setIsLoginForm(false)}
        >
          Registrarse
        </button>
      </div>
      
      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center text-gray-800 mb-6">
          {isLoginForm ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
        </h2>
        
        {/* Campo de nombre (solo para registro) */}
        {!isLoginForm && (
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        )}
        
        {/* Campo de email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        {/* Campo de contraseña */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        {/* Enlace para olvidar contraseña (solo para login) */}
        {isLoginForm && (
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        )}
        
        {/* Botón de envío */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors duration-300"
          onClick={handleSubmit}
        >
          {isLoginForm ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </button>
      </form>
      </div>
  </div>
  )
}
export default Formulario_Land;