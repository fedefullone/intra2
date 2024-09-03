function addData() {
    // Obtén los valores de los campos de entrada
    const pedido = document.getElementById('pedido').value;
    const zona = document.getElementById('zona').value;
    const seller = document.getElementById('seller').value;
    const estado = document.getElementById('estado').value;
    const obs = document.getElementById('obs').value;

    // Verifica si todos los campos están llenos
    if (!pedido || !zona || !seller || !estado || !obs) {
        alert('Por favor, llena todos los campos.');
        return;
    }

    // Crea una nueva fila en la tabla
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Agrega celdas y los datos ingresados
    newRow.insertCell(0).textContent = pedido;
    newRow.insertCell(1).textContent = zona;
    newRow.insertCell(2).textContent = seller;
    newRow.insertCell(3).textContent = estado;
    newRow.insertCell(4).textContent = obs;

    // Limpia los campos después de agregar los datos
    document.getElementById('dataForm').reset();
}

function copyTable() {
    // Selecciona la tabla
    const table = document.getElementById('dataTable');
    // Crea un rango y selección del contenido de la tabla
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges(); // Limpia cualquier selección previa
    window.getSelection().addRange(range);

    // Copia la selección al portapapeles
    try {
        const successful = document.execCommand('copy');
        alert(successful ? 'Cuadro copiado al portapapeles' : 'Error al copiar');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }

    // Limpia la selección
    window.getSelection().removeAllRanges();
}
