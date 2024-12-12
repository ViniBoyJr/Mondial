document.getElementById('aplicar-filtro').addEventListener('click', function() {
    // Obtém os valores dos checkboxes de cada categoria
    const airfryer = document.getElementById('airfryer').checked;
    const ventilador = document.getElementById('ventilador').checked;
    const cafeteira = document.getElementById('cafeteira').checked;

    // Obtém todos os produtos
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(function(produto) {
        // Obtém a categoria do produto
        const produtoCategoria = produto.getAttribute('data-categoria');
        
        // Verifica se o produto corresponde aos filtros selecionados
        const mostrarProduto = 
            (airfryer && produtoCategoria === 'Airfryer') ||
            (ventilador && produtoCategoria === 'Ventilador') ||
            (cafeteira && produtoCategoria === 'Cafeteira') ||
            (!airfryer && !ventilador && !cafeteira); // Mostrar todos se nenhum filtro for selecionado
        
        // Exibe ou esconde o produto conforme o filtro
        produto.style.display = mostrarProduto ? 'block' : 'none';
    });
});










/* .function changeImage(){
    var image = document.getElementById("image");
    if(image.src === "https://via.placeholder.com/150/d32776"){
        image.src = "https://via.placeholder.com/150/efefef";
    }
    else if(image.src === "https://via.placeholder.com/150/efefef"){
        image.src = "https://via.placeholder.com/150/d32776";
    }
  }

<div>
  <img id="image" src="https://via.placeholder.com/150/d32776" />
</div>
<button onClick="changeImage()">Mudar</button>
*/
  