const express = require("express");
const { createContact } = require("../Controller/Controller");

const router = express.Router();

router.post("/", createContact);

module.exports = router;
