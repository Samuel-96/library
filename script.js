//creacion de la clase
class Book{
  constructor(title, author, pages, bookRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;
  }

  mostrarInfo() {
    return this.title + " by " + this.author + ". " + this.pages + " pages. " + this.bookRead;
  }
  
  addBookToLibrary(){

  }
}

const libreria = [];

const libreriaEjemplo = [new Book("ejemplo1","autor1",100,"read"), new Book("ejemplo1","autor1",100,"read")];

//declaracion de botones y ventanas
const btnAddBook = document.querySelector(".btnAdd");
const ventanaModal = document.querySelector("#modalBox");
const overlay = document.querySelector("#overlay"); //el overlay sirve para desenfocar el resto de la pagina y que tenga el foco la ventana modal
const gridLibros = document.querySelector(".grid-libros");

const tituloForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const checkboxForm = document.querySelector("#read");
const submitButton = document.querySelector(".submit-button");


//boton de añadir libro que abre la ventana modal
btnAddBook.addEventListener("click", e => {
    ventanaModal.style.display = "block";
    overlay.style.display = "block";
  })

//overlay que sirve para desenfocar el fondo de la pantalla y cuando se hace click fuera de la ventana modal la cierra
overlay.addEventListener("click", e => {
    ventanaModal.style.display = "none";
    overlay.style.display = "none";
  })

//boton de añadir libro dentro de la ventana modal
submitButton.addEventListener("click", e => {

  e.preventDefault(); // Evita la recarga de la página por defecto del formulario

  // Obtengo los datos del formulario (título, autor, páginas)
  const title = tituloForm.value;
  const author = authorForm.value;
  const pages = pagesForm.value;

  const isRead = checkboxForm.checked;

  // Creo un nuevo libro
  //const book = new Book(title, author, pages, isRead);
  let book = new Book(title, author, pages, isRead);
  
  // Agrego el libro a la librería
  libreria.push(book);

  // Creo un elemento div para el libro
  const divLibro = document.createElement("div");
  divLibro.className = "libro";
  divLibro.setAttribute("data-libro",libreria.indexOf(book));

  // Creo elementos <p> para mostrar título, autor y páginas
  const pTitle = document.createElement("p");
  pTitle.textContent = "Título: " + book.title;

  const pAuthor = document.createElement("p");
  pAuthor.textContent = "Autor: " + book.author;

  const pPages = document.createElement("p");
  pPages.textContent = "Páginas: " + book.pages;

  const buttonRemoveBook = document.createElement("button");
  buttonRemoveBook.style.border = "none";
  buttonRemoveBook.style.width = "100%";
  buttonRemoveBook.textContent = "Eliminar";
  buttonRemoveBook.style.backgroundColor = "salmon";
  buttonRemoveBook.addEventListener("click", e => {
    divLibro.remove();
    libreria.splice(libreria.indexOf(book),1);
    const valorDataLibro = divLibro.dataset.libro;
  console.log(valorDataLibro);
  console.log(libreria);
  })

  const buttonReadBook = document.createElement("button");
  buttonReadBook.style.border = "none";
  buttonReadBook.style.width = "100%";
  if(checkboxForm.checked){
    buttonReadBook.textContent = "Leído";
    buttonReadBook.style.backgroundColor = "Green";
  }
  else{
    buttonReadBook.textContent = "No leído";
    buttonReadBook.style.backgroundColor = "Salmon";
  }

  buttonReadBook.addEventListener("click", e => {
    // Busca el índice del libro dentro del array libreria
    const index = libreria.indexOf(book);

    // Verifica si el libro está en el array
    if (index !== -1) {
        // Cambia el estado del libro
        if (buttonReadBook.textContent === "Leído") {
            buttonReadBook.textContent = "No leído";
            buttonReadBook.style.backgroundColor = "salmon";
            libreria[index].bookRead = false;
            console.log(libreria);
        } else {
            buttonReadBook.textContent = "Leído";
            buttonReadBook.style.backgroundColor = "green";
            libreria[index].bookRead = true;
            console.log(libreria);
        }

        // Puedes hacer más acciones aquí, como actualizar la interfaz de usuario, guardar el estado en el almacenamiento, etc.
    }
});

  // Agrego los elementos <p> al divLibro
  /*const portada = document.createElement("img");
  portada.style.width = "90%";
  portada.style.height = "130px";
  portada.backgroundColor = "grey";
  portada.style.border = "none";

  divLibro.appendChild(portada);*/
  divLibro.appendChild(pTitle);
  divLibro.appendChild(pAuthor);
  divLibro.appendChild(pPages);
  divLibro.appendChild(buttonReadBook);
  divLibro.appendChild(buttonRemoveBook);
  

  // Estilizo el divLibro
  divLibro.style.display = "flex";
  divLibro.style.flexDirection = "column";
  divLibro.style.backgroundColor = "white";
  divLibro.style.color = "black";
  divLibro.style.width = "50%";
  divLibro.style.borderRadius = "8px";
  divLibro.style.gap = "5px";
  divLibro.style.padding = "10px"

  // Agrego el divLibro al gridLibros
  gridLibros.appendChild(divLibro);

  // Cierro la ventana modal
  ventanaModal.style.display = "none";
  overlay.style.display = "none";

  const valorDataLibro = divLibro.dataset.libro;
  console.log(valorDataLibro);
  console.log(libreria);

})
/*
function Book(title, author, pages, bookRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;

    this.info = function() {
        return title + " by " + author + ". " + pages + " pages. " + bookRead;
    }
}*/

