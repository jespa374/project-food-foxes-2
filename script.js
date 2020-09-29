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


// checkBox.addEventListener('click', () => {
  
  
//   console.log(checkedValue)
// })

/*
const getValue = (radio) => {
  weatherToday(radio.value);
  forcastWeather(radio.value);
};

const filteredArr = newWeatherForcastArr.filter((item) =>
        item["dt_txt"].includes("12:00:00")
      );

*/      
/* Build a Food Review website
Pizza restaurants in Dublin
in the style of Deliveroo


// Step 1
Each member of your team should clone the repo for your team.


// Step 3
Divide into pairs or groups of three and choose freely from the selection of features below. The groups will work separatley on features in their own "feature branch" and we will help you to merge this into the master branch before the demo. Of course; have communication within the group and feel free to merge and commit code when you feel that the time is right. Help each-other and share knowledge in the team is always encouraged.

// Features
Below are suggestions for features for your site. You're free to choose the ones which are interesting to your team to implement:

Implement the randomly given design.
You don't need to implement all sections (if there's any that is not relevant to your site) but try and copy the page look and feel and design details. Feel free to make text, logo and other things your own – it's a tribute, not an exact copy.

Filter on price range 
Add so that your users can filter restaurants based on different price ranges.

Sort on price
Add so that your users can sort the resturants on price, cheap to expensive using the average_cost_for_two parameter.

List reviews
List the 3 latest reviews for each restaurant.

Filter on delivery options
Make it so your users can choose to only show resturants which have delivery (has_online_delivery) or can be booked in advance (has_table_booking).

Filter on reviews
Make it so your users can choose to only show restaurants with good ratings.

Make the page responsive
To work on mobile, desktop or tablet.

Feel free to challenge yourself and team to come up with more or other features! This is your group project – you decided.


// Feature freeze
There's a thing called feature freeze., our feature freeze will be 2 hours before the demo. That's when it's time for you to merge your feature branches into the master branch. Our teachers will have a bit of a though time, since it's guaranteed there will be conflicts in your code (which happens when the same code is edited in two different branches). So expect merge conflicts at this point!

Once all the feature branches are merged into master, you're free to try and make smaller changes to your site and fix bugs - but be careful to make sure it'll be demoable.

*/