import type { Application } from "express";
import prisma from "../prisma";

export default function (app: Application) {
	app.post("/consumeType", async (req, res) => {
		const { name, remark } = req.body;
		const consumeType = await prisma.consumeType.create({
			data: {
				name,
				remark,
			},
		});
		res.json(consumeType);
	});

	app.get("/consumeType", async (req, res) => {
		const { id } = req.query;
		const result = await prisma.consumeType.findUnique({
			where: {
				id: Number(id),
			},
		});
		res.json(result);
	});
}
