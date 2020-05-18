const supertest = require("supertest")
const server = require("../index")
const db = require("../database/config")
const uuid = require("uuid")


describe("TEST LOGIN", () => {

	test("Login endpoints work", async() => {
		const newUser = { username: "duck", password: "verdina"}
		const res = await supertest(server).post("/auth/login").send(newUser)
		
	})

	// test("Login endpoints works", async() => {
	// 	const newUser = { username: "bobby", password: "verdina"}
	// 	const res = await supertest(server).post("/auth/login").send(newUser)
	// })
})