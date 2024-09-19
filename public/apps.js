// Función que se encarga de añadir tareas y mostrarlas

function task() {
    // Obtenemos el valor del input
    let task = document.getElementById("taskInput").value;

    // En caso de que este vacio, mandara un mensaje de error
    if (task === "") {
        document.getElementById("message").innerHTML = `<p style="color:red">No has ingresado una tarea</p>`;
    } else {
        // Vamos a crear un nuevo li para cada tarea
        let newLi = document.createElement("li");

        // Creamos un boton de eleminar para cada tarea
        let newButton = document.createElement("button");
        // Contenido que va a tener el botón
        newButton.textContent = "Delete"
        // Al hacer click llamamos a la función para eliminar el respectivo li
        newButton.onclick = function() {
            newLi.remove()
        }

        // Indicamos el contenido que va a tener el li, que serán las tareas del input
        let newContent = document.createTextNode(task);

        // Aqui es donde agregamos las tareas y botones a cada li creado
        newLi.appendChild(newContent);
        newLi.appendChild(newButton);
        // Es donde vamos a mostrar esas tareas creadas, que será en ol
        let containerTaskList = document.getElementById("containerTaskList");
        document.body.insertBefore(newLi, containerTaskList);

        localStorage.setItem("taskStorage", task)
        document.getElementById("containerTaskList").innerHTML = localStorage.getItem("taskStorage")
    }

    // Con esta función limpiamos el mensaje cuando volvamos a clicar al input
    taskInput.addEventListener("click", function(){
        document.getElementById("message").innerHTML = "";
    });
}