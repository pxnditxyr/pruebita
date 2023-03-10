import './style.css'
import { setupCounter } from './counter.js';
import { Camera } from './components/Camera.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div id="container-camera">
      ${ Camera() }
    </div>
    <h1> Rostro </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
