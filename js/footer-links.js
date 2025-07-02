// Script para manejar los enlaces del footer en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Oculta el enlace de la página actual en el footer
    const path = window.location.pathname;
    
    if (path.includes('consulta-docente')) {
        const consultaLink = document.querySelector('.CONSULTA-FOOTER');
        if (consultaLink) consultaLink.style.display = 'none';
    } else if (path.includes('libro-reclamos')) {
        const reclamosLink = document.querySelector('.RECLAMOS-FOOTER');
        if (reclamosLink) reclamosLink.style.display = 'none';
    } else if (path.includes('suscripcion')) {
        const suscripcionLink = document.querySelector('.SUSCRIPCION-FOOTER');
        if (suscripcionLink) suscripcionLink.style.display = 'none';
    }
}); 