// Como realizar peticiones
// XmlHttpRequest (No lo vamos a ver)
// Fetch
// Axios

// Como manejar la data
// CallBacks (No lo vamos a ver)
// Promises
// Async/Await

// Vamos a realizar una peticion

const url = 'https://jsonplaceholder.typicode.com/users';

const list_name = document.getElementById('name');
const list_username = document.getElementById('username');
const list_lat = document.getElementById('lat');
const list_lng = document.getElementById('lng');

const readUsers = () => {
  // console.log('Realizando peticion...');

  const request = fetch('https://jsonplaceholder.typicode.com/users');

  request
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);

      response.forEach((name) => {
        const names = document.createElement('p');
        const usernames = document.createElement('p');
        const lat = document.createElement('p');
        const lng = document.createElement('p');

        names.classList.add('data');
        usernames.classList.add('data');
        lat.classList.add('data');
        lng.classList.add('data');

        names.textContent = name.name;
        usernames.textContent = name.username;
        lat.textContent = name.address.geo.lat;
        lng.textContent = name.address.geo.lng;

        list_name.appendChild(names);
        list_username.appendChild(usernames);
        list_lat.appendChild(lat);
        list_lng.appendChild(lng);
      });

      /*for (let i = 0; i < response.length; i++) {
        console.log(response[i].name);
      }*/
      // Pintado de data
    })
    .catch((error) => {
      console.log(error);

      // POO
      // CREAR FUNCION ERROR

      // const message = manageError(error.statusCode)
      // print(message);

      // const errorMessage = new Error(error.statusCode);
      // errorMessage.print();

      if (error.statusCode === 500) {
        console.log('Mensaje de servidor');
      }

      if (error.statusCode === 404) {
        console.log('Mensaje de cliente recuso no encontrado');
      }
    });

  // console.log(request);

  // request / response
  // verbHTTP(GET,POST,PUT,DELETE)
  // body
  // header
  // statusCode
  // Data viaja en formatoJSON
  // ENDPOINTS
};

readUsers();

// Se usa disparadoroes que serian los listeners
// DOMContentLoaded

// QUE SON LAS PROMISES

// SE CUMPLE (RESOLVE)
// NO SE CUMPLE (REJECT)

// const waiting = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve('Se ejecuto el code');
//  }, 2000);
// });

// waiting.then(() => {
//  console.log('Mensaje del resolve');
// });

// const logged = new Promise((resolve, reject) => {
//  const loggedIN = false;

//  loggedIN ? resolve('Logeado') : reject('Deslogeado');
// });

// logged.then(() => {
//  console.log('Estas logeado en la App...');
// });

// logged.catch(() => {
//  console.log('No estas logeado');
// });
