
document.addEventListener("DOMContentLoaded", () => {
  crearGaleria()
})

function crearGaleria() {
  // selecciono la lista
  const galeria = document.querySelector(".galeria-imagenes")

  for (let index = 1; index <= 12; index++) {
    // creo un elemento img para cada imagen
    const imagen = document.createElement("IMG")
    imagen.src = `build/img/thumb/${index}.jpg`
    imagen.alt = "imagen de la galeria"

    // le creo un id a la imagen
    imagen.dataset.imagenId = index

    // evento a imagen
    // la funcion no se ejecutara hasta que le click a la imagen si tueviera los parentesis la funcion se ejecutaria automaticamente
    imagen.onclick = mostrarImagen

    // creo un elemento li
    const lista = document.createElement("LI")
    lista.appendChild(imagen)

    // agrego las lista a la galeria
    galeria.appendChild(lista)
  }
}

function mostrarImagen(event) {
  // convierto el id de la imagen en tipo numero
  const id = parseInt(event.target.dataset.imagenId);
  const imagen = document.createElement("IMG")
  imagen.src = `build/img/grande/${id}.jpg`

  const overlay = document.createElement("DIV")
  overlay.classList.add("overlay")

  // boton para cerra la imagen
  const btnCerrarImagen = document.createElement("P")
  btnCerrarImagen.textContent = "X"
  btnCerrarImagen.classList.add("btn-cerrar")

  // evento para cerrar la imagen con el boton
  btnCerrarImagen.onclick = () => {
    overlay.remove()
    body.classList.remove("fijar-body")
  }

  overlay.append(imagen, btnCerrarImagen)

  // evento para cerrar la imagen haciendo click
  overlay.onclick = () => {
    overlay.remove()
    body.classList.remove("fijar-body")
  }

  // mostrar en el html
  const body = document.querySelector("body")
  body.appendChild(overlay)
  body.classList.add("fijar-body")
}
