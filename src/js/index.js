document.addEventListener("DOMContentLoaded", () => {
  fijaNavegacion()
})

function fijaNavegacion() {
  const barra = document.querySelector(".header")

  // registrar el intersection observer
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      barra.classList.remove("fija")
    } else {
      barra.classList.add("fija")
    }
  })

  // elemento a observar
  observer.observe(document.querySelector(".sobre-festival"))
}