const mongoose = require("mongoose");
const Bootcamp = mongoose.model("bootcamps");

module.exports = (app) => {


  app.get(`/api/bootcamp`, async (req, res) => {
    const query = req.query.q;
    console.log(query);
    const results = await Bootcamp.find({company:query});
    console.log(results);

    res.json({
      bootcamp: results,
    });
  });


  // app.post(`/api/bootcamp`, async (req, res) => {
  //   const bootcamp = await Bootcamp.create(req.body);
  //   return res.status(202).send({
  //     error: false,
  //     bootcamp,
  //   });
  // });

  // app.put(`/api/bootcamp/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body);

  //   return res.status(203).send({
  //     error: false,
  //     bootcamp,
  //   });
  // });

  // app.delete(`/api/bootcamp/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const bootcamp = await Bootcamp.findByIdAndDelete(id);

  //   return res.status(204).send({
  //     error: false,
  //     bootcamp,
  //   });
  // });
};
