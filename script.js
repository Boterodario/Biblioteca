// Estructuras de datos (listas para libros y usuarios)
let libros = [];
let usuarios = [];
let prestamos = [];

// Agregar libro
function agregarLibro() {
    const nombre = document.getElementById('nombreLibro').value;
    const autor = document.getElementById('autorLibro').value;
    if (nombre && autor) {
        libros.push({ nombre, autor });
        actualizarListaLibros();
        actualizarSelectLibros();
    }
}

// Agregar usuario
function agregarUsuario() {
    const nombre = document.getElementById('nombreUsuario').value;
    if (nombre) {
        usuarios.push(nombre);
        actualizarListaUsuarios();
        actualizarSelectUsuarios();
    }
}

// Actualizar lista de libros
function actualizarListaLibros() {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = '';
    libros.forEach((libro, index) => {
        const li = document.createElement('li');
        li.textContent = `${libro.nombre} - ${libro.autor}`;
        listaLibros.appendChild(li);
    });
}

// Actualizar lista de usuarios
function actualizarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.textContent = usuario;
        listaUsuarios.appendChild(li);
    });
}

// Actualizar select de usuarios
function actualizarSelectUsuarios() {
    const select = document.getElementById('usuarioSelect');
    select.innerHTML = '<option value="">Seleccionar Usuario</option>';
    usuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario;
        option.textContent = usuario;
        select.appendChild(option);
    });
}

// Actualizar select de libros
function actualizarSelectLibros() {
    const select = document.getElementById('libroSelect');
    select.innerHTML = '<option value="">Seleccionar Libro</option>';
    libros.forEach(libro => {
        const option = document.createElement('option');
        option.value = libro.nombre;
        option.textContent = libro.nombre;
        select.appendChild(option);
    });
}

// Prestar libro
function prestarLibro() {
    const usuario = document.getElementById('usuarioSelect').value;
    const libro = document.getElementById('libroSelect').value;
    if (usuario && libro) {
        prestamos.push({ usuario, libro });
        actualizarListaPrestamos();
    }
}

// Actualizar lista de préstamos
function actualizarListaPrestamos() {
    const listaPrestamos = document.getElementById('listaPrestamos');
    listaPrestamos.innerHTML = '';
    prestamos.forEach((prestamo, index) => {
        const li = document.createElement('li');
        li.textContent = `${prestamo.usuario} ha prestado ${prestamo.libro}`;
        listaPrestamos.appendChild(li);
    });
}
