import Users from "../../models/user.js";

import jwt from "jsonwebtoken";

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    },
  );

  const refreshToken = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const userLogin = async (request, reply) => {
  try {
    const { email, password } = request.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return reply.code(401).send({
        message: "Invalid email or password",
      });
    }

    const isMatch = password === user.password;

    if (!isMatch) {
      return reply.code(401).send({
        message: "Invalid email or password",
      });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    return reply.code(200).send({
      message: "Login successful",

      accessToken,

      refreshToken,

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return reply.code(500).send({
      message: "Internal Server Error",
    });
  }
};

export const userSignup = async (request, reply) => {
  try {
    const { name, email, password } = request.body;

    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return reply.code(400).send({
        message: "Email already in use",
      });
    }

    const newUser = new Users({
      name,
      email,
      password,
    });

    await newUser.save();

    return reply.code(201).send({
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error);

    return reply.code(500).send({
      message: "Internal Server Error",
    });
  }
};

export const refreshToken = async (request, reply) => {
  try {
    return reply.code(200).send({
      message: "Refresh token endpoint",
    });
  } catch (error) {
    return reply.code(500).send({
      message: "Internal Server Error",
    });
  }
};

export const fetchUser = async (request, reply) => {
  try {
    return reply.code(200).send({
      message: "Fetch user endpoint",
    });
  } catch (error) {
    return reply.code(500).send({
      message: "Internal Server Error",
    });
  }
};
