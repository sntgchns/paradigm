FROM python:3.13.6-alpine3.22
LABEL name="Santiago Soñora" website="https://santiago.soñora.com"
WORKDIR /app
COPY requirements.txt /app/
# VOLUME ["/app"]
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt
COPY . /app/
CMD ["gunicorn", "--bind", "0.0.0.0:10000", "--workers=5", "--threads=2", "app:app"]

# docker login --> user: sntgchns password: O[sga]ANI77INA
# docker build -t sntgchns/paradigm:k8s -f Dockerfile_k8s .
# minikube image load sntgchns/paradigm:k8s