const router = require("express").Router();
const User = require("../models/User");

//CREATE POST
router.post("/add", async (req, res) => {

 // const newUser = new User(req.body);
    console.log("its here");
 
    try {
      
  
      const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          source: req.body.source,
          mobile: req.body.mobile,
          destination: req.body.destination,
          time:req.body.time,
          date: req.body.date,
          gender: req.body.gender
      });

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {

  try{

    let data = await User.find();  
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err);
  }

});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {

    //finding in database
    const post = await User.findById(req.params.id);

    await post.delete();
    res.status(200).json("Post has been deleted...");

  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/edit/:id", async (req, res) => {


  console.log("inside put");

  try {

    //const post = await User.findById(req.params.id);

    const updatedPost = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        
    res.status(200).json(updatedPost);

  } catch (err) {
    res.status(500).json(err);
  }
});


  module.exports = router;