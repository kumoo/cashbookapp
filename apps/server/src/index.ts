import { createServer } from "./server";
import mongoose from "./db";

const db = mongoose.connection;

db.once("open", () => {
	const port = process.env.PORT || 5001;
	const server = createServer();
	server.listen(port, () => {
		console.log(`api running on ${port}`);
	});
});
