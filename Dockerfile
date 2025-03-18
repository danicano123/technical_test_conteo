# Usamos la imagen oficial de Node.js
FROM node:18

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos de dependencias y los instalamos
COPY package.json package-lock.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto en el que correrá el servidor
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]