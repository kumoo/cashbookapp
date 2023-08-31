import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import useControllers from "./controllers";
require("express-async-errors");

export const createServer: () => express.Express = () => {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(urlencoded({ extended: true }))
		.use(json());

	useControllers(app);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	app.use((err: Error, req, res, next) => {
		res.status(500);
		res.json({ ...err, message: err.message });
		next(err);
	});
	return app;
};
