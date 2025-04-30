# Usa imagen oficial de Node
FROM node:20

# Establece directorio de trabajo
WORKDIR /app

# Copia e instala dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del proyecto
COPY . .

# Construye la app de producción
RUN npm run build

# Instala 'serve' para servir la app estática
RUN npm install -g serve

# Expone el puerto (5173 es común, pero podemos usar 4173 para producción si usas `vite preview`)
EXPOSE 5173

# Comando para servir la app
CMD ["serve", "-s", "dist", "-l", "5173"]