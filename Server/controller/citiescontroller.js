const citiData = require("./data.json");


module.exports = {
    getAllCities: (req, res, next) => {
        res.status(200).send(citiData);
    },
    getByBeauty: (req, res, next) => {
        const { id } = req.params;

        const index = citidata.findIndex(element => {
            return element.id === parseInt(id);
        });

        if (index !== -1) {
            res.status(200).send(citiData[index]);
        }
    },

    addCity: (req, res, next) => {
        const {
            cityName,
            cityImage,
            administrativeLevel,
            population,
            infor
        } = req.body;

        const newCity = {
            id,
            cityName,
            cityImage,
            administrativeLevel,
            population,
            infor
        };
        id++;
        citiData.psu(newCity);
        res.status(200).send(citiData);
    },
    updateInfor: (req, res, next) => {
        const { id } = req.params;
        const { newCity, newImage } = req.query;
        const index = citiData.findIndex(city => {
            return city.id === parseInt(id);
        });

        if (index !== -1) {
            citiData[index].cityName =
                newCityName || citiData[index].cityName;
            citiData[index].citiImage =
                newCitiImage || citiData[index].citiImage;
            res.status(200).send(citiData);
        } else {
            res.status(404).send("city not found");
        }
    },
    updateCity: (req, res, next) => {
        const { id } = req.params;
        const index = citiData.findIndex(city => {
            return city.id === parseInt(id);
        });

        if (index !== -1) {
            citiData[index].city++;
            res.status(200).send("updated Failed");
        }
    },
    deleteCity: (req, res, next) => {
        const { id } = req.params;
        const index = citiData.findIndex(city => {
            return city.id === parseInt(id);
        });
        citiData.splice(index, 1);
        res.status(200).send(citiData);
    }
};