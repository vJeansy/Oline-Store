// Small' screen navBar
document.getElementById('topLinks').innerHTML = `
<h5 class="text-center">Siguenos</h5>
<ul class="d-flex justify-content-center text-center">
  <li class="me-4"><a href="https://www.instagram.com/cocoshopcc?igsh=NnJ4eW10cGk2eXps" target="_blank"><i class="bi bi-instagram"></i></a></li>
  <li class="me-4"><a href="https://www.facebook.com/cocoshopcc?mibextid=LQQJ4d" target="_blank"><i class="bi bi-facebook"></i></a></li>
  <li class="me-4"><a href=""><i class="bi bi-whatsapp" target="_blank"></i></a></li>
  <li class="me-4"><a href="mailto:cocoshop.cc@hotmail.com" target="_blank"><i class="bi bi-envelope-at"></i></a>
  </li>
</ul>
<h5 class="text-center">Enterate de más</h5>
<ul class="list-unstyled text-center">
  <li><a href="#" class="text-decoration-none text-secondary">Buscar tienda</a></li>
  <li><a href="#" class="text-decoration-none text-secondary" data-bs-toggle="modal" data-bs-target="#signUpModal">Únete a nosotros</a></li>
  <li><a href="#" class="text-decoration-none text-secondary" data-bs-toggle="modal" data-bs-target="#signInModal">Iniciar sesión</a></li>
  <li class="nav-item dropdown"><a href="#" class="text-decoration-none text-secondary" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ayuda</a><ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./CocoShop-HTML/termsOfUse.html">Términos de uso</a></li>
            <li><a class="dropdown-item" href="./CocoShop-HTML/termsOfSales.html"> Términos de venta</a></li>
            <li><a class="dropdown-item" href="./CocoShop-HTML/avisoLegal.html">Aviso Legal</a></li>
            <li><a class="dropdown-item" href="./CocoShop-HTML/policyofPrivacyAndCookies.html">Politica de privacidad y cookies</a></li>
            <li><a class="dropdown-item" href="">Configuracion de privacidad y cookies</a></li>
          </ul></li>
</ul>`;
// DOM vars.
const firstProductLine = document.getElementById('vestimenta-hombre');
const secondProductLine = document.getElementById('calzados-hombre');
const thirdProductLine = document.getElementById('calzados-mujer');
const fourthProductLine = document.getElementById('ofertas');
const fivethProductLine = document.getElementById('novedades');
var products;

/* Obtain JSON info */
function jsonProducts(){
    axios({
        method: 'GET',
        url: 'CocoShop-JSON/productos.json'
    }).then(res => {
        products = res.data;
        
        // Filter and show products by category
        const vestimentaHombre = products.filter(p => p.categoria === "Vestimenta para hombre");
        const calzadosHombre = products.filter(p => p.categoria === "Calzados para hombre");
        const calzadosMujer = products.filter(p => p.categoria === "Calzados para mujes");
        const ofertas = products.filter(p => p.categoria === "Ofertas");
        const novedades = products.filter(p => p.categoria === "Novedades");

        showCard(vestimentaHombre, firstProductLine, vestimentaHombre.length);
        showCard(calzadosHombre, secondProductLine, calzadosHombre.length);
        showCard(calzadosMujer, thirdProductLine, calzadosMujer.length);
        showCard(ofertas, fourthProductLine, ofertas.length);
        showCard(novedades, fivethProductLine, novedades.length);

    }).catch(err => {
        console.log('Hay un error con los productos!', err);
    });
}

// Container for product cards
function rows(container, n_products){
    var nRows = Math.ceil(n_products / 3);
    for(var i = 1; i <= nRows; i++){
        container.innerHTML += `<div class="row" id="rows-${i}"></div>`;
    }
}

// Display cards on screen
function showCard(art, container, n_products){
    rows(container, n_products);
    var nRows = Math.ceil(n_products / 3);
    var id = 0;
    for(var i = 1; i <= nRows; i++){
        for(var j = 1; j <= 3; j++){
            if(art[id] != undefined){
                document.getElementById('rows-' + i).innerHTML += `
                <div class="col-md-4 my-3">
                    <div class="card">
                    <img src="${art[id].carpeta}1.jpg" alt="${art[id].nombre}" class="card-img-top" style="width: auto; height: 350px;">
                    <div class="card-body text-justify">
                        <h5 class="card-title fs-3">${art[id].nombre}</h5>
                        <span class="badge badge-success w-100 mb-2"><h5 class="m-0 text-bg-dark">RD$ ${art[id].precio.toLocaleString('en-US')}</h5></span>
                        <p class="card-text">${art[id].descripcion}</p>
                        <button onclick="verFotos(${id})" class="btn btn-warning w-100 my-2" data-toggle="modal" data-target="#Modal">Ver fotos</button>
                        <button onclick="comprarProducto(${id})" class="btn btn-success w-100 my-2" data-toggle="modal" data-target="#Modal">Comprar <i class="fab fa-whatsapp"></i></button>
                    </div>
                    </div>
                </div>
                `;
                id++;
            }
        }
    }
}

// Call function to obtain the filtered products.
jsonProducts();