const cardContainer = document.getElementById('card-container')
const card = document.getElementById('card')
const restoInfo = document.getElementById('api-data')




const fetchZomato = () => {
  const apiKey = "66748116ada83a96ea0d8e2b3c763360" //Peggy
  const cityID = 91 //Dublin
  const cusineID = 82 //pizza
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
          
        console.log(place.restaurant.price_range);

        cardContainer.innerHTML += `
        <article class="card" id="card"> 
        
          <img class="pic" src="${place.restaurant.thumb}"/>
          <h4>${place.restaurant.name}</h4>
          <p>Average cost for 2: ${place.restaurant.average_cost_for_two}</p>
          <p>Neightborhood: ${place.restaurant.location.locality}</p>
          <p>Online Delivery: ${place.restaurant.has_online_delivery}</p>
          <p>Table Booking: ${place.restaurant.has_table_booking}</p>
          <p>Aggregate Rating: ${place.restaurant.user_rating.aggregate_rating}</p>
          <p>Price Range: ${place.restaurant.price_range}</p>
         
          <p>Address: ${place.restaurant.location.address}</p>
        
        </article>`
      })
    })
}

fetchZomato()

//  function to filter by price range
const checkBox = document.getElementsByName('price-range')
const getValue = (radio) => {
  fetchZomato(radio.value)
}

//function sort price

let restaurantList = [];
let sortToLowest = null;
let sortTohighest = null;

const sortFromLow = (event) => {
  sortToLowest = target.value;
  sortbyLowPrice(filterList());
};

const sortbyLowPrice = () => {
  const cityID = 91 //Dublin
  const cusineID = 82 //pizza
  const API_URL_LOW_PRICE = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&cuisines=${cusineID}&sort=cost&order=asc`;
  const apiKey = "66748116ada83a96ea0d8e2b3c763360" //Peggy
  
  fetch(API_URL_LOW_PRICE, { headers: { "user-key": apiKey } })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((json) => {
      restaurantList = json.restaurants;
      json.restaurants.forEach(place => {
          
        console.log(place.restaurant.name);
        console.log(place.restaurant.average_cost_for_two);
        console.log(place.restaurant.price_range);

        const printRestaurants = (restaurants) => {
        cardContainer.innerHTML += ""
        restaurants.forEach((place) => {
          cardContainer.innerHTML +=
          `<article class="card" id="card"> 
            <img class="pic" src="${place.restaurant.thumb}"/>
            <h4>${place.restaurant.name}</h4>
            <p>Average cost for 2: ${place.restaurant.average_cost_for_two}</p>
            <p>Neightborhood: ${place.restaurant.location.locality}</p>
            <p>Online Delivery: ${place.restaurant.has_online_delivery}</p>
            <p>Table Booking: ${place.restaurant.has_table_booking}</p>
            <p>Aggregate Rating: ${place.restaurant.user_rating.aggregate_rating}</p>
            <p>Price Range: ${place.restaurant.price_range}</p>
            <p>Address: ${place.restaurant.location.address}</p>
         </article>`
        })
      }
      })
    })
  }

  const sortFromHigh = (event) => {
    sortByHighPrice = target.value;
    sortbyLowP(filterList());
  };
  

  const sortbyHighPrice = () => {
    const apiKey = "66748116ada83a96ea0d8e2b3c763360" //Peggy
    const cityID = 91 //Dublin
    const cusineID = 82 //pizza
    const API_URL_HIGH_PRICE = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&cuisines=${cusineID}&sort=cost&order=desc`;

  
    fetch(API_URL_HIGH_PRICE, { headers: { "user-key": apiKey } })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((json) => {
        
        console.log(json)
        json.restaurants.forEach(place => {
         
          console.log(place.restaurant.name);
          console.log(place.restaurant.average_cost_for_two);
          console.log(place.restaurant.price_range);
          const printRestaurants = (restaurants) => {
          cardContainer.innerHTML += "";
          restaurants.forEach((place) => {
            cardContainer.innerHTML +=
          `<article class="card" id="card">
            <img class="pic" src="${place.restaurant.thumb}"/>
            <h4>${place.restaurant.name}</h4>
            <p>Average cost for 2: ${place.restaurant.average_cost_for_two}</p>
            <p>Neightborhood: ${place.restaurant.location.locality}</p>
            <p>Online Delivery: ${place.restaurant.has_online_delivery}</p>
            <p>Table Booking: ${place.restaurant.has_table_booking}</p>
            <p>Aggregate Rating: ${place.restaurant.user_rating.aggregate_rating}</p>
            <p>Price Range: ${place.restaurant.price_range}</p>
            <p>Address: ${place.restaurant.location.address}</p>
          </article>`
        })
        }
      })
    })

    
   
    //roomCard.addEventListener('click', sortbyLowPrice);

//sort on price code suggestion


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

