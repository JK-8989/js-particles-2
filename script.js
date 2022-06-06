const images = [
  './images/09931.png','./images/09932.png','./images/09933.png',
  './images/09934.png','./images/09935.png','./images/09936.png',
  './images/09937.png','./images/09938.png','./images/09939.png',
  './images/09940.png','./images/09941.png','./images/09942.png',
  './images/09943.png','./images/09944.png','./images/09945.png',
  './images/09946.png','./images/09947.png','./images/09948.png',
  './images/09949.png','./images/09950.png','./images/09951.png',
  './images/09952.png','./images/09953.png','./images/09954.png',
  './images/09955.png','./images/09956.png','./images/09957.png',
  './images/09958.png','./images/09959.png','./images/09960.png',
  './images/09961.png','./images/09962.png','./images/09963.png'
]

function createParticles(){
  const section = document.querySelector('section');
  const square = document.createElement('img');

  let size = Math.random() * 100;

  square.style.width = 100 + size + 'px';
  square.style.height = 100 + size + 'px';
  square.style.borderRadius = '50%';


  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  const bg = images[Math.floor(Math.random() * images.length)];
  square.setAttribute('src', bg);

  section.appendChild(square);

  setTimeout(()=>{
    square.remove()
  }, 5000);
}

setInterval(createParticles, 500);
