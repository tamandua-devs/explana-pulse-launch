# Etapa 1 - Build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências e gera o build
RUN npm install && npm run build

# Etapa 2 - Servir com Nginx
FROM nginx:stable-alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nosso arquivo de config customizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build gerado para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expondo a porta padrão do Nginx
EXPOSE 80

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]
