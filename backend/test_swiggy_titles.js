const fetch = require("node-fetch");
async function test() {
  try {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21750", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const json = await res.json();
    const cards = json?.data?.cards || [];
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i]?.card?.card?.header?.title || "No Title";
        const restaurants = cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants && restaurants.length > 0) {
            console.log(`Index ${i} - Title: ${title} - Restaurants: ${restaurants.length}`);
        }
    }
  } catch (e) {
    console.error(e);
  }
}
test();
