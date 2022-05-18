const Thing = require('../models/thing');

exports.createThing = (req, res, next)=>{
    delete req.body._id;
    const thingObj = new Thing({
        ...req.body
    });
    thingObj.save().then(() => res.status(201).json({message: "Objet créé !"})).catch((e)=>res.status(400));
}

exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id : req.params.id }, { ...req.body, _id: req.params.id })
    .then((resp) => res.status(200).json({ message : 'Objet modifié'}))
    .catch(e => res.status(400).json({ e }));
}

exports.DeleteThing = (req, res, next) => {
    Thing.deleteOne({ _id : req.params.id})
    .then(thing => res.status(200).json({ message: 'Delete'}))
    .catch(e => res.status(400).json({ e }));
}

exports.GetThings =(req, res, next) => {
    Thing.find().then(things => res.status(200).json(things)).catch(e => res.status(400).json({e}));
}

exports.GetThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
    .then((th) => res.status(200).json(th))
    .catch(e => res.status(400).json({e}));
}