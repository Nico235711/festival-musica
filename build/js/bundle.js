function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const a=document.createElement("IMG");a.src=`build/img/thumb/${t}.jpg`,a.alt="imagen de la galeria",a.dataset.imagenId=t,a.onclick=mostrarImagen;const n=document.createElement("LI");n.appendChild(a),e.appendChild(n)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),a=document.createElement("IMG");a.src=`build/img/grande/${t}.jpg`;const n=document.createElement("DIV");n.classList.add("overlay");const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=()=>{n.remove(),o.classList.remove("fijar-body")},n.append(a,c),n.onclick=()=>{n.remove(),o.classList.remove("fijar-body")};const o=document.querySelector("body");o.appendChild(n),o.classList.add("fijar-body")}function fijaNavegacion(){const e=document.querySelector(".header");new IntersectionObserver(t=>{t[0].isIntersecting?e.classList.remove("fija"):e.classList.add("fija")}).observe(document.querySelector(".sobre-festival"))}document.addEventListener("DOMContentLoaded",()=>{crearGaleria()}),document.addEventListener("DOMContentLoaded",()=>{fijaNavegacion()});
//# sourceMappingURL=bundle.js.map