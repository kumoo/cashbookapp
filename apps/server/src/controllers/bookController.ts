import type { Application } from "express";
import BookService from "../services/bookService";

export default function (app: Application) {
	app.post("/book", async (req, res) => {
		const result = await BookService.createBook();
		res.json(result);
	});

	app.get("/book/list", async (req, res) => {
		const result = await BookService.getBookList();
		res.json(result);
	});
}
