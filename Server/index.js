const express = require("express");
const app = express();
app.use(express.json());

const {
    getAllCities,
    getByBeauty,
    addCity,
    updateCity,
    deleteCity,
    updateInfor
} = require("./controller/citiescontroller");

app.get("/api/all_cities", getAllCities);
app.get("/api/city/:id", getByBeauty);
app.post("/api/add_city", addCity);
app.put("/api/update_City/:id", updateCity);
app.put("/api/update_infor/:id", updateInfor);
app.delete("/api/delete-city/:id", deleteCity);


const port = 9001;
app.listen(port, () => console.log(`${port}`));