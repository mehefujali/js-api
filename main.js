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

      const cartFind = cart.find(fcart => fcart.id === datanew.id)

      if (!cartFind) {
            cart.push(datanew)
            console.log(cart);
            prductCounter.innerText = cart.length
            totalCartPrice += datanew.price
            totalPrice.innerText = totalCartPrice.toFixed(2)
            totalItems.innerText = cart.length
            const cartCard = document.createElement('div')
            cartCard.innerHTML = `
            <div class="card card-side bg-base-100 shadow-xl">
               <figure>
                        <img
             src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                      <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                 <div class="card-actions justify-end">
                      <button class="btn btn-primary">Watch</button>
                </div>
            </div>
          </div>
            `


            vewCart.appendChild(cartCard)



      }
      else {
            alert('cart already added')

      }






}
document.getElementById('vewCart').addEventListener('click', () => {
      console.log('clicked');
      document.getElementById('cardContainer').classList.add('hidden')

      vewCart.classList.remove('hidden')
})

loadData()