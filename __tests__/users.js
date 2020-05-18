const supertest = require("supertest")
const server = require("../index")
const db = require("../database/config")
const uuid = require("uuid")

describe("TEST REGISTER", () => {

	test("Registering endpoints works", async() => {
		const newUser = { username: uuid(), password: "Verdina"}
		const res = await supertest(server).post("/auth/register").send(newUser)
		
	})

	// test("Registering endpoints works", async() => {
	// 	const newUser = { username: uuid()}
	// 	const res = await supertest(server).post("/auth/register").send(newUser)
	// })
})