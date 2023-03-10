import UserService from "../services/user-service.js";

const userService = new UserService();
export const signUp =async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Succesfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Somthing went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

export const login = async (req, res) => {
    try {
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            message: 'Successfully logged in',
            data: token,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Somthing went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}