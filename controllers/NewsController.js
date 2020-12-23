const News = require('../models/news');

getNews = async(req, res) => {
    // try {
    //     console.log("in get");
    //     const allNews = await News.find();
    //     res.status(200).json(allNews);
    // } catch (err) {
    //     console.log(err);
    //     res.status(400).json({error:err})
    // }
    res.status(200).json([{},{}]);
};

postNews = async(req, res) => {
    // const news = new News({
    //     title: req.body.title,
    //     description: req.body.description
    // })
    // try {
    //     const savedNews = await news.save()
    //     console.log(savedNews);
    //     res.status(201).json(savedNews);
    // } catch (err) {
    //     console.log(err);
    // }
    if(req.body.title && req.body.description){
        res.status(201).json({message:"created new post"});
    }else{
        res.status(400).json({error:"something went wrong"});
    }

}

module.exports = { getNews, postNews };