const mongoose = require('mongoose');
const Bootcamp = mongoose.model('bootcamps');

module.exports = (app) => {
  app.get(`/api/bootcamp`, async (req, res) => {
    const results = await Bootcamp.find();
    return res.status(200).send(results);
  });

  app.post(`/api/bootcamp`, async (req, res) => {
    const bootcamp = await Bootcamp.create(req.body);
    return res.status(201).send({
      error: false,
      bootcamp,
    });
  });

  app.put(`/api/bootcamp/:id`, async (req, res) => {
    const { id } = req.params;

    const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      bootcamp,
    });
  });

  app.delete(`/api/bootcamp/:id`, async (req, res) => {
    const { id } = req.params;

    const bootcamp = await Bootcamp.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      bootcamp,
    });
  });
};
