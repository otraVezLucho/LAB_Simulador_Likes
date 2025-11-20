/*
LAB EVENTOS
Desarrollar un simulador de red social minimalista donde los usuarios puedan:
1. Crear publicaciones (cards) con imagen, título y descripción
2. Dar "me gusta" a las publicaciones
3. Ver un feed con todas las publicaciones creadas
1.Estructura HTML:
Formulario con:
• Campo de texto para título (<input type="text">)
• Área de texto para descripción
• Selector de archivos para imágenes (<input type="file" accept="image/*">)
• Botón de publicación (<button type="submit">)
• Contenedor para el feed de publicaciones.
2.Funcionalidades JS:
Publicar contenido:
•Al enviar el formulario, crear una "card" con:
• Imagen subida (usar URL.createObjectURL() para previsualizar)
• Título y descripción
• Contador de likes inicializado en 0
• Limpiar el formulario después de publicar
Sistema de likes:
• Botón de like en cada publicación
Al hacer clic:
• Cambiar color del ícono a rojo
• Incrementar el contador de likes

*/

const titulo = document.getElementById("titulo");

const descripcion = document.getElementById("area-texto");

const imagen = document.getElementById("imagen");

const postearInfo = document.getElementById("postear");

const containerFeed = document.getElementById("feed");


postearInfo.addEventListener("click", function () {

  const capturarTitulo = titulo.value;
  console.log(capturarTitulo);
  const capturarDescripcion = descripcion.value;
  const capturarImagen = imagen.files[0];


  // Container Div
  const containerDiv = document.createElement("div");
  containerDiv.style.width = "40%";
  containerDiv.style.height = "auto";
  containerDiv.style.boxShadow = "0 0 10px #270fadcc";
  containerDiv.style.borderRadius = "20px";
  containerDiv.style.margin = "0 auto";
  containerDiv.style.paddingBottom = "30px"

  //Crear el titulo
  const nuevoTitulo = document.createElement("h2");
  nuevoTitulo.style.padding = "20px";
  nuevoTitulo.style.display = "block";
  nuevoTitulo.textContent = capturarTitulo;


  if (capturarImagen) {
    const reader = new FileReader();
    reader.onload = function (e) {
      //Crear elemento imagen
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = e.target.result;
      nuevaImagen.style.width = "70%";
      nuevaImagen.style.height = "auto";
      nuevaImagen.style.objectFit = "cover";
      //VOY ACA, DEBO ASIGNAR EL ARCHIVO 

      containerDiv.append(nuevaImagen);
    };

    reader.readAsDataURL(capturarImagen);

  }else{
  
    alert("Debe completar la informacion o subir una imagen!");
  };


  //Agregando elementos al container div
    //Crear elemento descripcion
  const nuevaDescripcion = document.createElement("p");
  nuevaDescripcion.textContent = capturarDescripcion;

  containerDiv.append(nuevoTitulo);
  containerDiv.append(nuevaDescripcion);



 

  containerFeed.append(containerDiv);

  titulo.value = "";
  descripcion.value = "";
  imagen.value = "";

});
