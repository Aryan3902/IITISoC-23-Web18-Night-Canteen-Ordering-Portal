const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const app = express.Router();

const Menu = require("../model.js");

const foodget = (req, res) => {
    Menu.find({}).then((err, posts) => {
        if (err) {
            res.send(err);
        } else {
            res.send(posts);
        }
    });
}

const foodpost = (req, res) => {
    const newitem = new Menu({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        id: req.body.id
    });
    // console.log(req.body);
    newitem.save();
}

const foodgetq = (req, res) => {
    Menu.findOne({
        name: req.params.nitem
    }).then((err, posts) => {
        if (err) {
            res.send(err);
        } else {
            res.send(posts);
        }
    });
}

const foodput = (req, res) => {
    Menu.updateOne(
        { name: req.params.nitem },
        {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                id: req.body.id
            }
        },
        { overwrite: true }).then(
            function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("SUCCESSFULLY UPDATED");
                }
            }
        );
}

const foodpatch = (req, res) => {
    Menu.updateOne(
        { name: req.params.nitem },
        { $set: req.body }).then(
            function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("SUCCESSFULLY UPDATED");
                }
            }
        );
}


const fooddeleteo = (req, res) => {
    Menu.deleteOne({ name: req.params.nitem }).then(function (err) {
        if (err) {
            res.send("DELETED SUCCESSFULY");
        } else {
            res.send(err);
        }
    })


}

const fooddeletea = (req, res) => {
    Menu.deleteMany({}).then(function (err) {
        if (err) {
            res.send("DELETED SUCCESSFULY");
        } else {
            res.send(err);
        }
    });


}




module.exports = {
    foodget,
    foodpost,
    foodgetq,
    foodput,
    foodpatch,
    fooddeleteo,
    fooddeletea
}
