const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Signup =  (req,res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
        });
        user.save()
        .then(() => res.status(201).json({ message: 'User créé' }) )
        .catch(e => res.status(500).json({ e }));
    })
    .catch(e => res.status(500).json({ e }));
};

exports.login =  (req,res,next)=>{
    User.findOne({ email: req.body.email })
    .then((user) => {
        if(!user){
            return res.status(401).json({ message: 'Utilisateur non trouvée !' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
            if(!valid){
                return res.status(401).json({ message: 'MDP incorrect !' });
            }
            return res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN',
                    { expiresIn: '24h'}, 
                ),
            });
        })
        .catch((e) => req.status(500).json({ e }));

        return res.status(200).json({ message: 'Utilisateur connecté !' });
    })
    .catch((e) => req.status(500).json({ e }));
};