const clientes = require('../models/clientes');
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);
    clientes.find(function (err, clientes) {
      res.status(200).send(clientes);
    })
};

const getCompradores = (req, res) => {
  clientes.find({ comprou: true }, function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      const clientesFiltados = clientes.map(cliente => {
        return {
          nome: cliente.nome,
          email: cliente.email
        };
      });

      res.status(200).send(clientesFiltados);
    };
  });
};

const getByCpf = (req, res) => {
  const cpf = req.params.cpf;
    clientes.find({ cpf }, function(err, clientes) {
        res.status(200).send(clientes);
    });
};

const postClientes = (req, res) => {
  console.log(req.body);
  let cliente = new clientes(req.body);
    cliente.save(function(err){
    if (err) res.status(500).send({ message: err.message });

    res.status(201).send(cliente.toJSON());
  });
};

module.exports = {
  getAll,
  postClientes,
  getCompradores,
  getByCpf
};