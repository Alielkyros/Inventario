document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tipo = document.getElementById('tipo').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const talle = document.getElementById('talle').value;
    const cantidad = document.getElementById('cantidad').value;
    
    const itemList = document.getElementById('itemsList');
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    
    itemDiv.innerHTML = `
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Modelo:</strong> ${modelo}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Talle:</strong> ${talle}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
    `;
    
    itemList.appendChild(itemDiv);
    
    document.getElementById('itemForm').reset();
});