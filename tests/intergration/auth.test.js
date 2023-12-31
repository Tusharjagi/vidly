const request = require("supertest");
const { Genre } = require("../../models/genre");
const { User } = require("../../models/user");

describe("auth middleware", () => {
  beforeAll(() => {
    server = require("../../index");
  });

  afterEach(async () => {
    await Genre.deleteOne({});
    await server.close();
  });

  let token;

  beforeEach(() => {
    token = new User().generateAuthToken();
    name = "genre1";
  });

  const exec = () => {
    return request(server)
      .post("/api/genres")
      .set("x-auth-token", token)
      .send({ name: "genre1" });
  };

  it("should return 401 if no token is provided", async () => {
    token = "";

    const res = await exec();
    expect(res.status).toBe(401);
  });

  it("should return 400 if no token is invalid", async () => {
    token = "a";

    const res = await exec();
    expect(res.status).toBe(400);
  });

  it("should return 200 if token is valid", async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
});
