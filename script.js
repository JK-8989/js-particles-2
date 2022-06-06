function createParticles(){
  const section = document.querySelector('section');
  const square = document.createElement('img');

  let size = Math.random() * 50;

  square.style.width = 100 + size + 'px';
  square.style.height = 100 + size + 'px';
  square.setAttribute('src', './images/09955.png')

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  section.appendChild(square);

  setTimeout(()=>{
    square.remove()
  }, 5000);
}

setInterval(createParticles, 500);
