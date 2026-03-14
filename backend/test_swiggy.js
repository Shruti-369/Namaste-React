const fetch = require("node-fetch");
async function test() {
  try {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21750", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const json = await res.json();
    console.log("Success fetching JSON");
    if (!json.data || !json.data.cards) {
      console.log("No cards array found");
      return;
    }
    const cards = json.data.cards;
    let found = false;
    for (let i = 0; i < cards.length; i++) {
      const restaurants = cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants && restaurants.length > 0) {
        console.log(`Found ${restaurants.length} restaurants at index ${i}`);
        found = true;
      }
    }
    if (!found) console.log("No restaurants array found in the whole response");
  } catch (e) {
    console.error(e);
  }
}
test();
