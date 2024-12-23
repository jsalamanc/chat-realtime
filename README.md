# Descripción

Pagina web de streaming de clases en vivo con chats en realtime con Next.js, Sqlite, PrismaORM, express y socket.io

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [Node.js official website](https://nodejs.org/).

## Instalación

Para configurar el proyecto y ejecutarlo localmente, sigue estos pasos:

### Clonar el repositorio

Primero, necesitarás clonar el repositorio del proyecto a tu máquina local. Puedes hacerlo con el siguiente comando:

```bash
git clone https://github.com/jsalamanc/chat-realtime.git
cd chat-realtime
```

Luego instalamos dependencias:

```bash
npm install --force
npm run dev
```

!!TEN EN CUENTA QUE PARA USAR EL CHAT EN RELATIME, DEBES EJECUTAR EL SERVIDOR DE EXPRESS ANTES DE NEXT.JS PARA QUE EL FRONTEND SE CONECTE AUTOMATICAMENTE

para visualizar los datos en almacenados en SQlite, porfavor ejecutar el siguiente comoando para acceder a prisma Studio:

```bash
npx prisma studio

http://localhost:5555

```

### Rutas de la app

login
http://localhost:300/

register
http://localhost:300/?type=register

clases disponibles
http://localhost:300/clases

clase
http://localhost:300/clases/que-es-tailwind
