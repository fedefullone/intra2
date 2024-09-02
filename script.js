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
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = pedido;
    cell2.textContent = zona;
    cell3.textContent = seller;
    cell4.textContent = estado;
    cell5.textContent = obs;

    // Limpia los campos después de agregar los datos
    document.getElementById('dataForm').reset();
}
