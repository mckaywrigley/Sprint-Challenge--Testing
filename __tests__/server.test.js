const request = require("supertest");
const server = require("../index");

describe("Server tests.", () => {
  describe("POST /games", () => {
    it("creates games and responds with 201", async () => {
      const game = {
        title: "Pacman", // required
        genre: "Arcade", // required
        releaseYear: 1980 // not required
      };

      const res = await request(server)
        .post("/api/games")
        .send(game);

      expect(res.status).toBe(201);
    });

    it("responds with 422 if game is invalid", async () => {
      const game = {};

      const res = await request(server)
        .post("/api/games")
        .send(game);

      expect(res.status).toBe(422);
    });

    it("returns json", async () => {
      const res = await request(server).get("/api/games");

      expect(res.type).toBe("application/json");
    });
  });

  describe("GET /api/games", () => {
    it("retrieves list of games responds with 200", async () => {
      const res = await request(server).get("/api/games");

      expect(res.status).toBe(200);
    });

    it("returns array", async () => {
      const res = await request(server).get("/api/games");

      expect(Array.isArray(response.body)).toBe(true);
    });

    it("returns json", async () => {
      const res = await request(server).get("/api/games");

      expect(res.type).toBe("application/json");
    });
  });
});
