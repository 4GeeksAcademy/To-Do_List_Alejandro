// Función que se encarga de añadir tareas y mostrarlas
function task() {
    // Obtenemos el valor del input
    let task = document.getElementById("taskInput").value;

    // En caso de que este vacio, mandara un mensaje de error
    if (task === "") {
        document.getElementById("message").innerHTML = `<p style="color:red">No has ingresado una tarea</p>`;
    } else {
        let taskList = JSON.parse(localStorage.getItem("taskStorage")) || [] // Obtener las tareas existentes o crear un array vacío si no existen
        taskList.push(task) // Añadir una nueva tarea
        localStorage.setItem("taskStorage", JSON.stringify(taskList)) // Guardar la lista actualizada
    
        renderTaskList()
    }

    // Con esta función limpiamos el mensaje cuando volvamos a clicar al input
    taskInput.addEventListener("click", function(){
        document.getElementById("message").innerHTML = "";
    });
}

function renderTaskList() {
    let containerTaskList = document.getElementById("containerTaskList");
    containerTaskList.innerHTML = ""

    let taskList = JSON.parse(localStorage.getItem("taskStorage")) || [];

    taskList.forEach(task => {
        // Vamos a crear un nuevo li para cada tarea
        let newLi = document.createElement("li");
        // Creamos un boton de eleminar para cada tarea
        let newButton = document.createElement("button");

        // Contenido que va a tener el botón
        newButton.textContent = "Delete"
        // Al hacer click llamamos a la función para eliminar el respectivo li
        newButton.onclick = function() {
            deleteTask(task)
        }

        // Indicamos el contenido que va a tener el li, que serán las tareas del input
        let newContent = document.createTextNode(task);
        // Aqui es donde agregamos las tareas y botones a cada li creado
        newLi.appendChild(newContent);
        newLi.appendChild(newButton);
        containerTaskList.appendChild(newLi)
    });
}

function deleteTask(task) {
    let taskList = JSON.parse(localStorage.getItem("taskStorage"))
    taskList = taskList.filter(t => t !== task) // Eliminar la tarea
    localStorage.setItem("taskStorage", JSON.stringify(taskList)) // Guardar la lista actualizada

    renderTaskList() // Actualizar la lista de la página
}

// Llamar a la función cuando se recarga la web
window.onload = function() {
    renderTaskList()
}