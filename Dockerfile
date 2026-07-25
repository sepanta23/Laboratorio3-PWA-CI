# Imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos compilados de la PWA al directorio
# que Nginx utiliza para servir contenido estático
COPY dist/laboratorio-pwa/browser /usr/share/nginx/html

# Reconfigurar Nginx para escuchar en el puerto 8081
# en lugar del puerto 80 por defecto
RUN sed -i 's/listen  *80;/listen 8081;/' /etc/nginx/conf.d/default.conf

# Exponer el nuevo puerto personalizado
EXPOSE 8081