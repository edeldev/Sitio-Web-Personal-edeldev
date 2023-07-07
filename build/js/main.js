
// Scroll up
function scrollUp() {
    const scrollup = document.getElementById("scroll-up");
    if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


// OpenMenu 
const menu = document.getElementById("menuToggle");
function openMenu(){
    document.body.classList.toggle("open");
}
menu.addEventListener("click", openMenu);


// CloseMenu
const close = document.querySelector(".close");
function closeMenu(){
    document.body.classList.remove("open");
}
close.addEventListener("click", closeMenu);

// Update sectionScroll h2
const header = document.querySelector('.rotar h2');
const sections = {
  0: "WELCOME",
  680: "SOBRE MÍ",
  1300: "PROYECTOS"
};

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  let sectionName = "WELCOME";

  for (const [sectionY, name] of Object.entries(sections)) {
    if (scrollY >= parseInt(sectionY)) {
      sectionName = name;
    } else {
      break;
    }
  }

  header.textContent = sectionName;
});


// Movimiento con el mouse
const container = document.querySelector('.logo-programacion');
const image = document.querySelector('.logo-programacion img');

let mouseX = 0;
let mouseY = 0;

container.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  updateImagePosition();
 
});

function updateImagePosition() {
  const centerX = container.offsetLeft + container.offsetWidth / 2;
  const centerY = container.offsetTop + container.offsetHeight / 2;
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  const percentX = deltaX / centerX;
  const percentY = deltaY / centerY;
  const rotateX = -10 * percentY;
  const rotateY = 10 * percentX;
  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Click a logo personal edeldev, dirige a pagina de blog
const close2 = document.querySelector(".close2");
function blog(){
  document.body.classList.toggle("openList");
}

function closeList(){
    document.body.classList.remove("openList");
}

image.addEventListener("click", blog);
close2.addEventListener("click", closeList);


// Click a dot
const imagenPersonal = document.querySelector(".imagen-personal img"),
      dot = document.querySelector("#dot"),
      bienvenido = document.querySelector(".welcome"),
      tooltip = document.querySelector(".tool");

imagenPersonal.addEventListener("click", imagenDot);

function imagenDot(){
    dot.classList.add("det");
    imagenPersonal.style.display="none";
    tooltip.style.display="none";
    bienvenido.style.display="block";
    
    setTimeout(() => {
        
        const typed = new Typed('.welcome', {
            strings: [
                '<i>Desarrollo web</i>', 
                '<i>Desarrollo web</i>', 
                '<i>Diseño web</i>', 
                '<i>Blog</i>'
            ],
            stringsElement: '#cadenas-texto',
            typeSpeed: 75,
            startDelay: 300,
            backSpeed: 75,
            smartBackspace: true,
            shuffle: false,
            backDelay: 1500,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html'
        });
    }, 3500);
    

    // start confetti
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  Stop

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    start();
    stop();
}


// ToggleTheme
const btnSwitch = document.querySelector("#switch"),
      logoImg = document.querySelector(".logo img"),
      logoImgMobile = document.querySelector(".logo-mobile img"),
      imgPersonal = document.querySelector(".imagen-personal img"),
      logoProgramacion = document.querySelector(".logo-programacion img");

function toggleTheme() {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  if( document.body.classList.contains("dark") ) {
    logoImg.setAttribute("src", "build/img/icono-edeldev-nuevo-light.png");
    logoImgMobile.setAttribute("src", "build/img/icono-edeldev-nuevo-light.png");
    imgPersonal.setAttribute("src", "build/img/PERSONAL-FOTO-EDELDEV-LIGHT.png");
    logoProgramacion.setAttribute("src", "build/img/logo-edeldev-nuevo-light.png");
  } else {
    logoImg.setAttribute("src", "build/img/icono-edeldev-nuevo.png");
    logoImgMobile.setAttribute("src", "build/img/icono-edeldev-nuevo-dark.png");
    imgPersonal.setAttribute("src", "build/img/edeldev-foto.png");
    logoProgramacion.setAttribute("src", "build/img/logo-edeldev-nuevo-dark.png");
  }
}
btnSwitch.addEventListener("click", toggleTheme);


//Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true
  
});
sr.reveal(`.hero, #sobre-mi, .project, .text-proyect, .mobile`);
sr.reveal(`.cambiar2, .cambiar4`, { origin: "right" });
sr.reveal(`.cambiar, .cambiar3`, { origin: "left" });
sr.reveal(`.whatsapp`, { origin: "bottom" });


//* Captar Atencion
let previousTitle = document.title;

window.addEventListener("blur", () => {
    previousTitle = document.title;
    document.title = 'Hey vuelve, ¡No te vayas!';
});

window.addEventListener("focus", () => {
    document.title = 'edeldev | Portafolio';
});
