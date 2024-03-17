const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const register = async (req, res, next) => {
    try {
        const newUser = new User({
            email: req.body.email,
            nameUser: req.body.nameUser,
            password: req.body.password,
            yearBirth: req.body.yearBirth,
            rol: "user",
            imgUser: req.body.imgUser
        });

        const duplicateUser = await User.findOne({nameUser: req.body.nameUser});

        if(duplicateUser) {
            return res.status(400).json("nombre de usuario no disponible")
        }

        const userSave = await newUser.save();
        return res.status(201).json(userSave)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({nameUser: req.body.nameUser});

        if(!user) {
            return res.status(400).json("El usuario no existe 🤷‍♀️")
        }

        if(bcrypt.compareSync(req.body.password, user.password)) {
            const token = generateSign(user._id);
            return res.status(200).json( {user, token} )
        } else {
            return res.status(400).json("La contraseña es incorrecta 🚫");
        }

    } catch (error) {
        return res.status(400).json("salio mal")
    }
};

const deleteUser = async (req, res, next) => {
    try {
       const { id } = req.params;
       const userDeleted = await User.findByIdAndDelete(id);
       return res.status(200).json({
           mesaje: "Este ususario ha sido eliminado",
           userDeleted,
       });
    } catch (error) {
       return res.status(400).json(error)
    }
};

const updatedUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user._id.toString() !== id) {
            if (req.user.rol === "admin") {
                const newUser = new User(req.body)
                const duplicateUser = await User.findOne({nameUser: req.body.nameUser});

                if(duplicateUser) {
                    return res.status(400).json("nombre de usuario no disponible")
                }
        
                newUser._id = id;
                const userUpdated = await User.findByIdAndUpdate(id, newUser, {new:true})
        
                
                const userSave = await userUpdated.save();
                return res.status(201).json(userSave)
            }
            return res.status(400).json("No puedes modificar a alguien que no seas tu mismo")
        } 

        const newUser = new User({
            email: req.body.email,
            nameUser: req.body.nameUser,
            password: req.body.password,
            yearBirth: req.body.yearBirth,
            rol: "user",
            imgUser: req.body.imgUser
        });

      

        const duplicateUser = await User.findOne({nameUser: req.body.nameUser});

        if(duplicateUser) {
            return res.status(400).json("nombre de usuario no disponible")
        }

        newUser._id = id;
        const userUpdated = await User.findByIdAndUpdate(id, newUser, {new:true})

        
        const userSave = await userUpdated.save();
        return res.status(201).json(userSave)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = { getUsers, register, login, deleteUser, updatedUser }