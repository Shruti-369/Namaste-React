export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21750",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const text = await response.text();
    
    try {
      res.status(200).json(JSON.parse(text));
    } catch {
      res.status(200).send(text);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
