# Usa una imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto del frontend (Vite usa 5173 por defecto)
EXPOSE 5173

# Comando por defecto para iniciar Vite
CMD ["npm", "run", "dev", "--", "--host"]
