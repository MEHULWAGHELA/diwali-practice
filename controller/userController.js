const userModel = require("../model/userModel")

const userGet = async (req, res) => {
    try {
        const userData = await userModel.find({})
        res.status(200).json({
            success: true,
            data: userData
        })
    }
    catch (error) {
        res.status(400).json(
            {
                success: false,
                error: error
            }
        )
    }
}
const getSingleUser = async (req, res) => {
    try {
        const data = await userModel.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: data
        })
    }
    catch (error) {
        res.status(400).json(
            {
                success: false,
                error: error
            }
        )
    }
}
const userPost = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
        const user = await userModel.create({ name, email, password })
        res.status(200).json({
            success: true,
            data: [
                user
            ]
        })
    }
    catch (error) {
        res.status(400).json(
            {
                success: false,
                error: error
            }
        )
    }
}
const userDelete = async (req, res) => {
    try {
        console.log(req.params.id)
        const user = await userModel.findById(req.params.id)
        if (user) {
            await user.deleteOne();
            res.status(200).json({
                success: true,
                message: "Data removed successfully"
            })
        }
        else {
            res.status(200).json({
                success: true,
                data: [
                    user
                ],
                message: "Data not found"
            })
        }
    }
    catch (error) {
        console.log(req.params)
        res.status(400).json(
            {
                success: false,
                error: error.message
            }
        )
    }
}
const userUpdate = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findById(req.params.id)
        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.password = req.body.password || user.password
            const updatedUser = await user.save()
            res.status(200).json({
                success: true,
                data: [
                    {
                        _id: updatedUser._id,
                        name: updatedUser.name,
                        email: updatedUser.email
                    }
                ]
            })
        }
        else {
            res.status(400);
            throw new Error("user not found")
        }
    }
    catch (error) {
        res.status(400).json(
            {
                success: false,
                error: error
            }
        )
    }
}
module.exports = { userGet, userPost, getSingleUser, userUpdate, userDelete }