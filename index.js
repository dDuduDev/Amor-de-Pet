document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado!');
  fetch('https://apiamordepet.onrender.com/api/products')
    .then( async res => {
      if (res.status >= 200 && res.status <= 299) {
        const data = await res.json();

        if (data.success) {
          window.localStorage.setItem('products', JSON.stringify(data.data))
        }
      }
    })
    .catch( err => console.error(err));

    fetch('https://apiamordepet.onrender.com/api/categories')
      .then( async res => {
        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();

          if (data.success) {
            window.localStorage.setItem('categories', JSON.stringify(data.data))
          }
        }
      })
      .catch( err => console.error(err));

    fetch('https://apiamordepet.onrender.com/api/pets')
      .then( async res => {
        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();

            if (data.success) {
              window.localStorage.setItem('pets', JSON.stringify(data.data))
          }
        }
      })
      .catch( err => console.error(err));


});

    
const products = JSON.parse(window.localStorage.getItem('products'))
const categories = JSON.parse(window.localStorage.getItem('categories'))
const pets = JSON.parse(window.localStorage.getItem('pets'))

products.map( product => {
  document.getElementById('products').innerHTML += `
  <div class="prod"><img src="${product.imagem_url}" width="250px" alt="" class="pro1">${product.nome}</div>

  `
})

categories.map( category => {
  document.getElementById('destaque-items').innerHTML += `
  <a href="venda-geral.html">
  <div id="item"> 
    <img src="${category.imagem_url}" width="140px" alt="">
    ${category.nome}
  </div>
  </a>

  `
})


    // //   fetch('https://apiamordepet.onrender.com/api/products')
    //   .then( async res => {
    //    if (res.status >= 200 && res.status <= 299) {
    //     const data = await res.json();

    //      if (data.success) {
    //        data.data.map( product => {
    //         document.getElementById('products').innerHTML += `
    //         <div class="prod"><img src="data:image/png;base64,${product.imagem_url}" width="250px" alt="" class="pro1">${product.nome}</div>
    //           <div id="${product.id}">
    //              ${product.nome}
    //              <img src="data:image/png;base64,${product.imagem_url}" alt="Imagem Produto" />
    //            </div>
    //          `
    //         })
    //       }
    //     }
    //   })
    //  .catch( err => console.error(err));
    
