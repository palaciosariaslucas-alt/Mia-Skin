
    const kitsData = [
        {
            nombre: "Kit Tropical Dream",
            imagen: "WhatsApp Image 2026-11-05 at 3.12.50 PM_2.jpeg", // Naranja
            colorBolita: "Anaranjado"
        },
        {
            nombre: "Kit Mango Pop",
            imagen: "Combo 1.jpeg", // Amarillo
            colorBolita: "Amarillo"
        },
        {
            nombre: "Kit Green Glow",
            imagen: "WhatsApp Image 2026-11-05 at 3.12.50 PM (2)_2.jpeg", // Verde
            colorBolita: "Verde"
        }
    ];

    function cambiarKit(indice) {
        // Obtenemos los elementos de la imagen y del texto por su ID
        const imgElement = document.getElementById('imagenKit');
        const textElement = document.getElementById('nombreKit');

        // Cambiamos la fuente de la imagen y el texto según el índice de la bolita tocada
        imgElement.src = kitsData[indice].imagen;
        textElement.innerText = kitsData[indice].nombre;

        // Aquí creamos el console.log que pediste para registrar el cambio en la consola
        console.log("Kit seleccionado en Mía Skin: " + kitsData[indice].nombre + " (Bolita color: " + kitsData[indice].colorBolita + ")");
    }