const nombreCache = "PWAPD"
const archivosChache=[
    "/",
    "/index.html",
    "/CSS/index.css",
    "/CV/curriculo.pdf",
    "/JS/app.js",
    "/JS/index.js",
    "/IMG_pd/icons",
    "/IMG_pd/SF.png",
    "/IMG_pd/contacto.jpg",
    "/IMG_pd/fondo.jpg",
    "/IMG_pd/p1.jpg",
    "/IMG_pd/p2.jpeg",
    "/IMG_pd/p3.jpeg",
    "/IMG_pd/p4.jpeg",
    "/IMG_pd/p5.jpeg",
    "/IMG_pd/p6.jpeg",
    "/IMG_pd/p8.jpg",
    "/IMG_pd/p9.jpg",
    "/IMG_pd/p10.jpg",
    "/IMG_pd/p11.jpeg",
    "/IMG_pd/prueba.jpg",
    "/IMG_pd/ubicacion.jpg"
]

//instalacion con una promesa "self"
self.addEventListener('install', e =>{
    console.log("serviceWorker se instalo", e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada corrctamente")
            cache.addAll(archivosChache);
        })
    )
})


// activar el service worker
self.addEventListener('activate', e =>{
    console.log("serviceWorker activo",e)
})

// validar y registrar los archivos que hay en la nube, en caso de cambio o modificacion se actualizara automaticamente
self.addEventListener('fetch', e =>{
    console.log("fetch..", e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache=> {
            return respuestaCache
        })
    )
})