const supertest = require("supertest");
const app = require("../app");

const UserModel = require("../models/user.models");

const api = supertest(app);

describe("Unit Test: USER_MODEL", () => {
  test("Creatting a new user", async () => {
    const newUser = await UserModel.create({
      user_name: "angel",
      email: "angel@gmail.com",
      password: "1234",
    });
    expect(newUser).toHaveProperty("id");
  });
});

beforeAll(async () => {});

describe("End-Point: [USER]", () => {
  test("Path: GET->/api/v1/users [make sure Content-Typye=application/json]", async () => {
    await api
      .get("/api/v1/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});
