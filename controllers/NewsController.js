const News = require('../models/news');

getNews = async(req, res) => {
    try {
        console.log("in get");
        const allNews = await News.find();
        res.status(200).json(allNews);
    } catch (err) {
        console.log(err);
    }
};

postNews = async(req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedNews = await news.save()
        console.log(savedNews);
        res.status(200).json(savedNews);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getNews, postNews };