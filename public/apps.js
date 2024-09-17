function task() {
    let task = document.getElementById("taskinput")

    if (task == "") {
        document.getElementById("message").innerHTML = `<p style="color:red">No has ingresado una tarea</p>`
    } else {
        document.getElementById("message").innerHTML = `<p style="color:green">Tarea Agregada</p>`
    }
}