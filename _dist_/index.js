




const isIntersecting = (entry) => {
    return entry.isIntersecting;
};


const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

const registerImages = (imagen) => {
    observer.observe(imagen);
};



const maximun = 122;
const minimun = 1;
const random = () =>
    Math.floor(Math.random() * (maximun - minimun) + minimun); 


const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "m-8 bg-green-200 rounded-3xl mx-auto";
    container.width = "320";
    container.id = "1";
    const imagen = document.createElement('img');
    imagen.className = "mx-auto rounded-3xl bg-gray-200";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const mountNode = document.getElementById('images');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImages(newImage);

}

const removeImage = () => {
    const lengthMount = mountNode.childNodes.length;
    const nodos = document.getElementById('id');
    mountNode.remove(nodos);
    location.reload();
  /* for(let i = 0; i < lengthMount; i++){
        
    }*/
    

}

const agregarImagen = document.getElementById('boton1');
agregarImagen.addEventListener('click',addImage);

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click',removeImage);