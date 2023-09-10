
## le doy as para usarlo en el copy copíar lo compilado despues de la fase 1
FROM node:18 as build-step
## se necesita para que funcione el workdir o si no tira error npm
WORKDIR /usr/local/app

COPY package*.json /usr/local/app/

RUN npm install
##Copia el contenido del direcotrio a la raiz del contenedor 
COPY . .
RUN npm run build --prod

##Fase 2 subirlo a ngix
FROM nginx
# se deja en esta ruta /usr/share/nginx/html
COPY --from=build-step /usr/local/app/dist/docker_example_angular /usr/share/nginx/html


