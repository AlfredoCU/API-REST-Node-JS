# API REST con Express y Node JS.

- A partir de Express vamos a construir nuestra aplicaciones web que eventualmente se ejecutan en un entorno Node JS.
- Controladores y rutas en Node JS.

## Características técnicas de instalación.

**1.-Instalar Software.**

* Para poder trabajar este proyecto en tu máquina, primero que nada tendrás que instalar **NVM** en tu equipo, para eso
te dejo el aqui el link del Github oficial de [NVM](https://github.com/creationix/nvm).

* Si eres usuario Windows aqui te dejo el link para instalarlo [NVM Window](https://github.com/coreybutler/nvm-windows).

* Una vez que hayas instalado NVM, procederemos a instalar Node, para eso podemos usar en la consola: 

  ```nvm install node```

* O si eres usuario windows puedes descargarlo directamente desde la pagina oficial de [Node](https://nodejs.org/es/).

* Despues tienes que instalar GIT para poder trabajar con este proyecto, para eso puedes acceder a la pagina de [Instalar GIT](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git).

**2.-Clonar Proyecto.**

* Una vez que ya tengamos todo instalado procedemos a clonar el proyecto. Para eso debemos abrir la terminal del SO que estas utilizando (en el caso de windows abres el GIT-Bash) y escribiremos la siguiente línea de código:

  ```git clone https://github.com/AlfredoCU/Api-Rest-Nodejs.git```

* Esta línea lo que hace es descargar el código del proyecto donde podrás acceder al código.

**3.-Instalar Paquetes.**

* Ahora deberás acceder a la carpeta del proyecto y en tu terminal deberás escribir el siguiente comando:

  ```npm install```

* Esto lo que hará es instalar todos los paquetes necesarios que se encuentran en el package.json del proyecto, como viene siendo **Express**, etc. para poder utilizarlos.

## Ejecutar la APP.

* Para ejecutar el servidor local en tu terminal deberás escribir el siguiente comando:

  ```node app.js```

* Ahora podra visualiar la aplicacion en el puerto 3000 en tu navegador.

  ```http://localhost:3000/```
