const Cities = require('../models/cityModel');
const States = require('../models/stateModel');

const saveCities = async(req, res, next) => {
    try {
        let cities = new address.Cities(req.body);
        await cities.save();
        return res.json({ "message": "Data Saved" });
    } catch (error) {
        return res.status(404).json({ "error": error });
    }
};

const getStates = async(req, res, next) => {
    try {
        const states = await States.find({});
        //console.log(states);
        return res.status(200).send(states);
    } catch (error) {
        return res.status(404).json({ "error": error });
    }
};

const getCities = async(req, res, next) => {
    try {
        console.log(req.params.state);
        const cities = await Cities.findOne({ state: req.params.state });
        console.log(cities)
        if (cities) {
            console.log(cities);
            return res.status(200).send(cities.cities);
        } else {
            console.log("lol");
        }
    } catch (error) {
        return res.status(404).json({ "error": error });
    }
};

module.exports = {
    saveCities,
    getStates,
    getCities
}