const express = require("express")
const router = express.Router();
const v1Routes = require("./v1")


// http://localhost:4001/api/v1
router.use("/v1", v1Routes);

module.exports = router;