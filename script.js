// Função para filtrar produtos por categoria
function filtrarCategoria(categoria) {
  const itens = document.querySelectorAll('.item'); // Seleciona todos os itens (produtos)

  itens.forEach(item => {
    // Se a categoria for "todos", mostramos todos os produtos
    if (categoria === 'todos') {
      item.style.display = 'block';
    } else if (item.classList.contains(categoria)) {
      // Se o produto tiver a classe da categoria, mostramos
      item.style.display = 'block';
    } else {
      // Caso contrário, ocultamos o item
      item.style.display = 'none';
    }
  });
}
