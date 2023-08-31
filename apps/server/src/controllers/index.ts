import consumeTypeController from "./consumeTypeController";
import type { Application } from "express";

export default function (app: Application) {
	consumeTypeController(app);
}
