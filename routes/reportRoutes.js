  let express = require("express"),
      multer = require("multer"),
      mongoose = require("mongoose"),
      router = express.Router();
  const path = require("path");
  const reportsController = require('../controllers/ReportsController');
const checkAuth = require("../middleware/check-auth");
  // Multer File upload settings
  const DIR = "./reports/";
  let email;

  const storage = multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, DIR);
      },
      filename: (req, file, cb) => {
          // email = file.originalname.toLowerCase();
          email = req.params.email;

          // const name = file.originalname.toLowerCase().split(' ').join('-');
          const name = req.params.email.toLowerCase();
          console.log(name);
          const ext = path.extname(file.originalname);

          console.log(ext);
          cb(
              null,
              file.originalname.toLowerCase().split(" ").join("-") +
              "-" +
              name +
              "-" +
              Date.now() +
              ext.toLowerCase()
          );

          // const fileName = Date.now() + file.originalname.toLowerCase().split(' ').join('-');
          // cb(null, fileName)
      },
  });

  var upload = multer({
      storage: storage,
      // limits: {
      //   fileSize: 1024 * 1024 * 5
      // },
      fileFilter: (req, file, cb) => {
          cb(null, true);

      },
  });

  router.post("/upload-report/:email",checkAuth, upload.array("filename", 6), reportsController.uploadReport);

  router.get("/", checkAuth, reportsController.findReports);

  router.delete('/deleteReport/:email/:report', checkAuth,  reportsController.deleteReport);

  router.get('/getReports/:email',checkAuth,  reportsController.getAllReports);

  router.post('/downloadReport', checkAuth, reportsController.downloadReport);

  module.exports = router;