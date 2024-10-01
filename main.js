const loadData = () => {
      fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => displayData(data))
}


const displayData = (data) => {
      const cardContainer = document.getElementById('cardContainer')
      for (const album of data) {
            console.log(album);

            const cardDiv = document.createElement('div')
            cardDiv.innerHTML = ` 
            <div class="card-body border-purple-700 border-2 rounded-md shadow-lg  shadow-[#00000033]">
                              <h2 class="card-title">Id : ${album.id}</h2>
                              <p>${album.title}</p>
                              <div class="card-actions justify-end">
                                    <button class="btn">Buy Now</button>
                              </div>
                        </div>
            `
            cardContainer.appendChild(cardDiv)
      }

}



loadData()