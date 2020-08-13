'use strict';

const Router = require('express');
const userRepo = require('../repo/userRepository');
const { v4: uuidv4 } = require('uuid');

const getUserRoutes = (app) => {
    const router = new Router();

    router
        .get('/id', (req, res) => {
            res.send({ id:uuidv4()});
        })
        .get('/user/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = userRepo.get(id);
            res.send(result);
        })
        .post('/save', (req, res) => {
            const person = req.body;
            const result = userRepo.save(person.id,person);
            if(result)
            {
                res.status(200).send({result:result,user:person});
            }
            else
            {
                res.status(200).send({error: 'Failed to save user'});
            }
        });

    app.use('/user', router);
};

module.exports = getUserRoutes;