import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

const UA_HEADERS = {
  "User-Agent": "Mozilla/5.0",
};

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21750",
      { headers: UA_HEADERS }
    );

    const json = await response.json();
    res.json(json);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/api/restaurants/update", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0",
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();
    try {
      res.json(JSON.parse(text));
    } catch {
      res.json({ message: "Swiggy blocked update", raw: text });
    }

  } catch (err) {
    res.status(500).json({ error: "Update fetch failed" });
  }
});

app.get("/api/menu/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    const text = await response.text();

    // Log the response to debug blocked pages
    console.log("RAW MENU RESPONSE:", text.slice(0, 200));

    // Try converting to JSON
    try {
      const json = JSON.parse(text);
      return res.json(json);
    } catch (err) {
      return res.status(500).json({
        error: "Menu API blocked by Swiggy",
        raw: text.substring(0, 200),
      });
    }

  } catch (err) {
    console.error("Menu fetch failed:", err);
    res.status(500).json({ error: "Menu API failed" });
  }
});



app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
