const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product}],
    })
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}],
    })
    res.status(200).json(tagData);
  } catch (error) {
    res.status(404).json({ message: "No tag found with that id!"})
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(error);
  }
})


router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    
    })
    if (!tagData[0]) {
      res.status(404).json({ message: "No tag found with that id!"});
      return;
    }

    const updatedTag = await Tag.findByPk(req.params.id);
    
    res.status(200).json(updatedTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })

    if(!tagData) {
      res.status(404).json({ message: "No tag found wiht that id!"});
    }
    res.status(200).json({ message: "Tag deleted!"})
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
