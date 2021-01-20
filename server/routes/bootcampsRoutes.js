const { query } = require("express");
const mongoose = require("mongoose");
const Bootcamp = mongoose.model("bootcamps");

module.exports = (app) => {
  app.get(`/api/bootcamp`, async (req, res) => {
    console.log(req.query);
    let searchOptions = {};
    let q = req.query.q;
    if (q != null && q!== "undefined" && q !== "") {
      searchOptions.company = new RegExp(q, "i");
    }
    try {
      const results = await Bootcamp.find(searchOptions);
      // console.log(results);
      res.json({
        bootcamp: results,
        searchOptions:q
      });
    } catch {
      res.redirect("/");
    }

    // app.get(`/api/bootcamp`, async (req, res) => {
    //   const query = req.query.q;
    //   console.log(query);
    //   const results = await Bootcamp.find({company:query});
    //   console.log(results);
  
    //   res.json({
    //     bootcamp: results,
    //   });

  });

};
