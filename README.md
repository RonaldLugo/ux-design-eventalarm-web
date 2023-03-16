# Ejecución

Dos opciones, con datos estáticos y con lectura de archivo json

1. Datos estáticos: abrir index.html en un navegador 
2. Fuente externa: leer archivo json a través de un http-server local

Para el segundo caso, se describe a continuación los pasos de ejecución:

* Instalar node
* Leer datos desde archivo json

```
// instalar nodejs - ejemplo en ubuntu 
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

// levantar servidor
cd [directorio raíz del repositorio]
npx http-server

// modificar archivo js/scripts.js, indicar ip y puerto en línea 62

// abrir 
http://localhost:8080

```