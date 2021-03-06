const express = require("express");
const router = express.Router();

const {
  create,
  categoryId,
  list,
  update,
  remove,
  read,
  listChild,
  listAll,
} = require("../controllers/category");
const { verifyToken } = require("../middleware/auth");

router.post("/category", verifyToken, create);
router.get("/categories", list);
router.get("/category/:id", read);
router.put("/category/:id", update);
router.delete("/category/:id", remove);
router.get("/categories/child", listChild);
router.get("/categories/all", listAll);

router.param("id", categoryId);

module.exports = router;
