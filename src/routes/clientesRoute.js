const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

router.get("/", controller.getAll);
router.get("/clientes", controller.getAll);
router.get("/compradores", controller.getCompradores);
router.post("/", controller.postClientes);
router.post("/clientes", controller.postClientes)
router.get("/:cpf", controller.getByCpf);


module.exports = router;
