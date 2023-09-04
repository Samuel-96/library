const libreria = [];

const libreriaEjemplo = [new Book("ejemplo1","autor1",100,"read"), new Book("ejemplo1","autor1",100,"read")];

const btnAddBook = document.querySelector(".btnAdd");
const ventanaModal = document.querySelector("#modalBox");
const overlay = document.querySelector("#overlay"); //el overlay sirve para desenfocar el resto de la pagina y que tenga el foco la ventana modal

const gridLibros = document.querySelector(".grid-libros");
const botonprueba = document.querySelector(".boton-prueba");

botonprueba.addEventListener("click", e => {
    const divLibro = document.createElement("div"); //creo un div
    divLibro.className = "libro"; //pertenece a la clase libro
    const p = document.createElement("p");
    p.textContent = libreriaEjemplo[0].title;
    divLibro.appendChild(p); // Agrego el párrafo como hijo del divLibro
    
    divLibro.style.display = "flex";
    divLibro.style.flexDirection = "column";

    gridLibros.appendChild(divLibro);
  })

btnAddBook.addEventListener("click", e => {
    ventanaModal.style.display = "block";
    overlay.style.display = "block";
  })

overlay.addEventListener("click", e => {
    ventanaModal.style.display = "none";
    overlay.style.display = "none";
  })

function Book(title, author, pages, bookRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;

    this.info = function() {
        return title + " by " + author + ". " + pages + " pages. " + bookRead;
    }
}

function addBookToLibrary() {
    
  }