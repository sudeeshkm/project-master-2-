const router = require("express").Router();
const Form = require("../models/FormModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 100,
  },
});

router.post("/form", upload.single("file"), async (req, res) => {
  try {
    const newForm = new Form({
      name: req.body.username,
      email: req.body.email,
      photo: req.file.path,
      phone: req.body.phoneno,
      course: req.body.course,
      startDate: req.body.startingdate,
      endDate: req.body.endingdate,
    });
    await newForm.save();
    res.status(200).json(newForm);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! SEE THE STATUS OF THE APPLICATION FORM
router.get("/form", async (req, res) => {
  try {
    const form = await Form.findOne({ name: req.body.name });
    res.status(200).json(form);
    console.log(form.status);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
