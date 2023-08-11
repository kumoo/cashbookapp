import bookController from "./bookController";
import type { Application } from "express";

export default function (app: Application) {
	bookController(app);
}
