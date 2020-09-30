const apiKey = "66748116ada83a96ea0d8e2b3c763360" //Peggy
const cityID = 91 //Dublin
const cusineID = 82 //pizza

const cardContainer = document.getElementById('card-container')
const card = document.getElementById('card')


const fetchZomato = () => {
  
  const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&cuisines=${cusineID}`

  fetch(apiURL, { headers: { "user-key": apiKey } })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((json) => {
      
      console.log(json)
      json.restaurants.forEach(place => {
        
        cardContainer.innerHTML += `
        <article class="card" id="card"> 
          <img class="pic" src="${place.restaurant.thumb}"/>
          <h4>${place.restaurant.name}</h4>
          <p>Address: ${place.restaurant.location.address}</p>
          <p>Average cost for two: ${place.restaurant.average_cost_for_two}</p>
          <p>Price Range: ${place.restaurant.price_range}</p>
          <p>Aggregate Rating: ${place.restaurant.user_rating.aggregate_rating}</p>
        </article>`
      })
    })
}
fetchZomato()


/*
function to fetch 3 reviews per restauruant...
need to grab restaurant id from original fetch. 
console.log(place.restaurant.id)

then for each restaurant input id into:
`https://developers.zomato.com/api/v2.1/reviews?res_id=${restaurantID}&start=4&count=3`

let restaurantID = 
and output:
for each of 3 reviews... print out
cardContainer.innerHTML += `<p>${}</p>`



hint from Ragna
fetch then save response to a let variable 
 then functions are buttons
 which change the Array... or write new arrays based on filters  



removed from Cards
<p>Table Booking: ${place.restaurant.has_table_booking}</p>
<p>Neightborhood: ${place.restaurant.location.locality}</p>
<p>Online Delivery: ${place.restaurant.has_online_delivery}       
*/