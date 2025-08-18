# Usa una imagen base de Nginx ligera
FROM nginx:alpine

# Copia el archivo de configuración de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de tu sitio web al directorio de Nginx
COPY . /usr/share/nginx/html

# Expón el puerto 10000
EXPOSE 10000

# docker login --> user: sntgchns password: O[sga]ANI77INA
# docker build -t sntgchns/paradigm:k8s -f Dockerfile_k8s .
# minikube image load sntgchns/paradigm:k8s