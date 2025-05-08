# 1) Build Angular
FROM node:18-alpine AS builder
WORKDIR /app

# Copier et installer deps
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copier tout le code et builder
COPY . .
RUN npm run build

# 2) Image finale Nginx
FROM nginx:stable-alpine
# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier votre config Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Copier le build Angular
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
