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
// Creating DOMs.
var vestimentaHombre = document.getElementById('vestimenta-hombre');
var calzadosHombre = document.getElementById('calzados-hombre');
var calzadosMujer = document.getElementById('calzados-mujer');
var ofertas = document.getElementById('ofertas');
var novedades = document.getElementById('novedades');
/* Obtain JSON info */
const obtainProducts = () => {
    axios.get('CocoShop-JSON/productos.json')
    .then(res => {
        productCards(res.data);
    })
    .catch(err => {
        console.log('Error loading products', err);
    });
};
// Display cards on screen
function productCards(products){
    products.forEach(product => {
        const container = product.categoria === 'Calzados para hombre'
        ? calzadosHombre
        : product.categoria === 'Vestimenta para hombre'
        ? vestimentaHombre
        : product.categoria === 'Calzados para mujer'
        ? calzadosMujer
        : product.categoria === 'Novedades'
        ? novedades
        : null;

        if (container) {
            container.innerHTML += `
                    <div class="card">
                    <img src="${product.carpeta}1.jpg" alt="${product.nombre}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title fs-5">${product.nombre}</h5>
                        <p class="card-text text-secondary fs-6">${product.descripcion}</p>
                        <span class="w-100">
                        <h5 class="m-0 text-dark">RD$ ${product.precio.toLocaleString('en-US')}
                        </h5>
                        </span>
                    <div class="comprar-btn">
                        <button onclick="sendWhatsAppMessage('${product.nombre}', 'https://raw.githubusercontent.com/vJeansy/Oline-Store/refs/heads/main/${product.carpeta}1.jpg')"
                         class="btn btn-success" data-toggle="modal"
                          data-target="#Modal">Comprar <i class="bi bi-whatsapp"></i></button>
                            </div>
                                </div>
                                    </div>
                                    `
                                };
                            });
                        };

// Call function to obtain the filtered products.
obtainProducts();
// whatsapp messega function.
function sendWhatsAppMessage(productName, imageUrl) {
    const phone = "18098988575"; // Número de teléfono (con código de país).
    const message = `Hola, estoy interesado en el producto "${productName}". Aquí está la imagen: ${imageUrl}`;
    
    // Codificar el mensaje para que sea compatible con URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Redirigir al usuario al enlace de WhatsApp
    window.open(whatsappURL, '_blank');
  }