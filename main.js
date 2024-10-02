const loadData = () => {
      fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
            .then(res => res.json())
            .then(data => {
                  allAlbums = data
                  displayData(data)
            })
}
const displayData = (data) => {
      const cardContainer = document.getElementById('cardContainer')
      for (const album of data) {
            // console.log(album);
            const cardDiv = document.createElement('div')
            cardDiv.innerHTML = ` 
            <div class="card-body flex flex-col justify-between border-purple-700 border-2 rounded-md shadow-lg h-full  shadow-[#00000033]">
                             <img src="${album.image}" class=" w-full h-60  "> </img>
                              <h2 class="card-title">${album.title}</h2>
                              <p class=" flex items-center">  ${album.rating.count}  Rating  ${album.rating.rate}     <i  class="fa-solid ml-2 fa-star" style="color: #FFD700;"></i> </p>
                              <h1 class=" text-xl font-bold">$ ${album.price}</h1>
                              <div class=" flex items-center justify-between">
                              <div class="badge badge-outline badge-secondary">${album.category}</div>
                              <div class="card-actions justify-end">
                                    <button class="btn bg-green-300 " id="addCart" onclick="addCart(${album.id})">Add to cart</button>
                              </div>
                              </div>
                        </div>
            `
            cardContainer.appendChild(cardDiv)
            document.getElementById('speen').classList.add('hidden')
      }


}
let countProd = 0
let totalCartPrice = 0
let cart = []
const prductCounter = document.getElementById('prductCounter')
const totalPrice = document.getElementById('totalPrice')
const totalItems = document.getElementById('totalProducts')
const vewCart = document.getElementById('carts')

const addCart = (id) => {
      const datanew = allAlbums.find(album => album.id === id)

      const cartFind = cart.find(fcart => fcart.id === id)

      if (!cartFind) {
            cart.push(datanew)
            // console.log(cart);
            prductCounter.innerText = cart.length
            totalCartPrice += datanew.price
            totalPrice.innerText = totalCartPrice.toFixed(2)
            totalItems.innerText = cart.length
            addToCartVew()
            sowTost(true)



      }
      else {
            sowTost(false)

      }




}
const sowTost = (alert) => {
      const alertSuccess = document.getElementById('alert-success')
      const alertError = document.getElementById('alert-error')
      if (alert) {
            alertSuccess.classList.remove('hidden')
            setTimeout(() => alertSuccess.classList.add('hidden'), 1500)
      }
      else {
            alertError.classList.remove('hidden')
            setTimeout(() => alertError.classList.add('hidden'), 1500)
      }
}

const addToCartVew = () => {
      vewCart.innerHTML = ``
      for (const product of cart) {
            const cartCard = document.createElement('div')
            cartCard.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl mb-4">
         <figure class="w-5/12">
                  <img
             src="${product.image}"
              alt="Movie" class=" w-32" />
          </figure>
                <div class="card-body">
        <h2 class="card-title">${product.title}</h2>
              <p>${product.description}</p>
              <p class=" font-bold text-xl">$${product.price}</p>
           <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
        `
            vewCart.appendChild(cartCard)

      }
}
addToCartVew()
document.getElementById('vewCart').addEventListener('click', () => {
      console.log('clicked');
      document.getElementById('cardContainer').classList.add('hidden')

      vewCart.classList.remove('hidden')
})

document.getElementById('homeBtn').addEventListener('click', () => {
      console.log('clicked');
      document.getElementById('cardContainer').classList.remove('hidden')

      vewCart.classList.add('hidden')
})

loadData()