"use strict";

const repository = require("../repositories/user-repository");
const md5 = require("md5");
const authService = require("../services/auth-service");

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      id: req.body.id,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY),
      isAdmin: req.body.isAdmin,
      games: req.body.games,
    });

    res.status(201).send({
      message: "Cliente cadastrado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await repository.authenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY),
    });

    if (!user) {
      res.status(404).send({
        message: "Usuário ou senha inválidos",
      });
      return;
    }

    const token = await authService.generateToken({
      id: user._id,
      email: user.email,
      name: user.name,
      username: user.username,
      games: user.games,
      isAdmin: user.isAdmin,
    });

    res.status(201).send({
      token: token,
      data: {
        email: user.email,
        name: user.name,
      },
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const data = await authService.decodeToken(token);

    const user = await repository.getById(data.id);

    if (!user) {
      res.status(404).send({
        message: "Cliente não encontrado",
      });
      return;
    }

    const tokenData = await authService.generateToken({
      id: user._id,
      email: user.email,
      name: user.name,
      username: user.username,
      games: user.games,
      isAdmin: user.isAdmin,
    });

    res.status(201).send({
      token: tokenData,
      data: {
        email: user.email,
        name: user.name,
      },
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.putGame = async (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const data = await authService.decodeToken(token);

    repository.updateOne({ id: data.id }, { $push: req.params.game });

    res.status(200).send({
      message: "Jogo adicionado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.get = async (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const data = await authService.decodeToken(token);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};
