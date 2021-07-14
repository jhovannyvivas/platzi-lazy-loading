
const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const accion = () => {
    console.log("funcion accion");
};

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(accion)
});

const registerImages = (imagen) => {
    observer.observe(imagen);
};