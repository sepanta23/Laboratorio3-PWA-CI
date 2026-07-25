# Imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos compilados de la PWA al directorio
# que Nginx utiliza para servir contenido estático
COPY dist/laboratorio-pwa/browser /usr/share/nginx/html

# Exponer el puerto 80 del contenedor
EXPOSE 80