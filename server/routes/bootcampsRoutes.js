const mongoose = require("mongoose");
const Bootcamp = mongoose.model("bootcamps");

module.exports = (app) => {
  app.get(`/api/bootcamp`, async (req, res) => {
    let searchOptions = {};
    if (req.query.company != null && req.query.company !== "") {
      searchOptions.company = new RegExp(req.query.company, "i");
    }
    try {
      const results = await Bootcamp.find(searchOptions);
      console.log(results);
      res.json({
        bootcamp: results,
      });
    } catch {
      res.redirect("/");
    }
  });

};
