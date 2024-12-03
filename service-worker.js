self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
});

self.addEventListener('fetch', (event) => {
    // Puedes añadir lógica para manejar el caché aquí
});
