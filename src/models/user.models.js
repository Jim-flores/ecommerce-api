const db = require("../utils/database");

const bcrypt = require("bcrypt");

const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         user_name:
 *           type: string
 *           example: Ian
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *      type: object
 *      properties:
 *        user_name:
 *          type: string
 *          example: Ian
 *        email:
 *          type: string
 *          example: ian@gmail.com
 *        password:
 *          type: string
 *          example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     token:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         id:
 *           type: number
 *           example: 1
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlhbkBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjY5OTk5NTMwfQ.nWexjxYDmcLOqrQ14SvfI3sATJI4vlIYhsEreCN65CKHT1hsRPL-1_Al1Smd_nFGRSasltyap8SX0O4RwN1kUw
 */

const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
    timestamps: false,
  }
);

module.exports = User;
