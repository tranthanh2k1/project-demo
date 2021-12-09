const express = require("express");
const router = express.Router();

const {
  saveOrder,
  listAllOrder,
  updateStatusOrderAdmin,
  orderDetail,
  listAllOrderStatus,
  searchOrderAdmin,
  filterByDate,
} = require("../controllers/order");
const { verifyToken } = require("../middleware/auth");
const { isAdmin } = require("../middleware/auth");

// user
router.post("/order", saveOrder);

// admin
router.get("/orderListAll", listAllOrder);
router.get("/order/detail/:orderId", orderDetail);
router.put(
  "/order/adminUpdateStatus/:orderId",
  verifyToken,
  isAdmin,
  updateStatusOrderAdmin
);
router.post("/order/status", listAllOrderStatus);
router.get("/order/admin/search", verifyToken, isAdmin, searchOrderAdmin);
router.post("/order/filterByDate", filterByDate);

module.exports = router;
