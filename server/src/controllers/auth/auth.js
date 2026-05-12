import Users from '../../models/user.js';
import jwt from 'jsonwebtoken';

const generateTokens = (user) => {
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );
    const refreshToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.send({
                status: 401,
                message: 'Invalid email or password',
            })
        }
        // const isMatch= password === user.password;
        // if(!isMatch){
        //     return res.send({
        //         status: 400,
        //         message: 'Invalid Credentials',
        //     })
        // }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
          return res.send({
            status: 400,
            message: "Invalid email or password",
          });
        }

        const { accessToken, refreshToken } = generateTokens(user);
        return res.send({
            status: 200,
            message: "Login successful",
            accessToken,
            refreshToken,
            user,
        });
    } catch (error) {
        return res.send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

export const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.send({
                status: 400,
                message: 'Email already in use',
            });
        }     
        const newUser = new Users({
            name: name,
            email: email,
            password: password,
        });
        // await newUser.save();  
        // const newUser = new Users({ name, email, password });
        await newUser.save();
        const { accessToken, refreshToken } = generateTokens(newUser);
        return res.send({
            status: 201,
            message: 'Account created successfully',
            accessToken,
            refreshToken,
            user: newUser
        });
    } catch (error) {
        return res.send({
            status: 500,
            message: 'Internal Server Error'
        });                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }       
}

export const refreshToken = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.send({
            status: 400,    
            message: 'Refresh token is required'
        });
    }



    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        let user;
        if (decoded.role === 'admin') {
            user = await Users.findById(decoded.userId);
        } else if (decoded.role === 'user') {
            user = await Users.findById(decoded.userId);
        } else if (decoded.role === 'manager') {
            user = await Users.findById(decoded.userId);
        } else if (decoded.role === 'systemadmin') {
            user = await Users.findById(decoded.userId);
        } else {
            return res.send({
                status: 403,
                message: 'Invalid user role'
            });
        }
        if (!user) {
            return res.send({
                status: 403,
                message: 'User Not Found'
            });
        }

        const { accessToken, refreshToken } = generateTokens(user);
        return res.send({
            status: 200,
            message: 'Access token refreshed successfully',
            accessToken,
            refreshToken
        });


    } catch (error) {
        return res.send({
            status: 403,
            message: 'Invalid Refresh Token'
        });
    }
}

export const fetchUser= async (req, res) => {
    try {
        const {userId, role} = req.user;
            let user;
        if (role === 'admin') {
            user = await Users.findById(userId);
        } else if (role === 'user') {
            user = await Users.findById(userId);
        } else if (role === 'manager') {
            user = await Users.findById(userId);
        } else if (role === 'systemadmin') {
            user = await Users.findById(userId);
        } else {
            return res.send({
                status: 403,
                message: 'Invalid user role'
            });
        }

        if (!user) {
            return res.send({
                status: 404,
                message: 'User not found'
            });
        }
        return res.send({
            status: 200,
            message: 'User fetched successfully',
            user
        });

    } catch (error) {
        return res.send({
            status: 500,
            message: 'Internal Server Error'
        });
    }
}

