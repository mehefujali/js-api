const loadData = () => {
      fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
            .then(res => res.json())
            .then(data => displayData(data))
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

const prductCounter = document.getElementById('prductCounter')
const addCart = (id) => {
      countProd += 1
      console.log(id);
      prductCounter.innerText = countProd



}


loadData()