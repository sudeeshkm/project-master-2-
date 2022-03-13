const router = require("express").Router();
const BatchManager = require("../models/BatchManager");
const Course = require("../models/Course");

// ! ADD NEW BATCH MANAGER
router.post("/bm", async (req, res) => {
  const newBM = new BatchManager(req.body);
  try {
    const savedBM = await newBM.save();
    res.status(200).json(savedBM);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! UPDATE BATCH MANAGER
router.put("/bm/:id", async (req, res) => {
  try {
    const Bm = await BatchManager.findById(req.params.id);
    const updatedBM = await BatchManager.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBM);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! DELETE BATCH MANAGER
router.delete("/bm/:id", async (req, res) => {
  try {
    const Bm = await BatchManager.findById(req.params.id);
    await Bm.delete();
    res.status(200).json("Details deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//!GET ONE BATCH MANAGER
router.get("/bm/:id", async (req, res) => {
  try {
    const Bm = await Post.findById(req.params.id);
    res.status(200).json(Bm);
  } catch (err) {
    res.status(500).json(err);
  }
});

//!GET ALL BATCH MANAGER
router.get("/bm", async (req, res) => {
  try {
    const Bm = await BatchManager.find();
    res.status(200).json(Bm);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ! CREATE NEW COURSE
router.post("/course", async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! UPDATE COURSE
router.put("/course/:id", async (req, res) => {
  try {
    const cour = await Course.findById(req.params.id);
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! DELETE COURSE
router.delete("/course/:id", async (req, res) => {
  try {
    const cour = await Course.findById(req.params.id);
    await cour.delete();
    res.status(200).json("Details deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! VIEW ALL COURSE
router.get("/course", async (req, res) => {
  try {
    const cour = await Course.find();
    res.status(200).json(cour);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
