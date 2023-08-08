import Mongoose from "mongoose";

const dbUrl = "mongodb+srv://admin:<password>@cluster0.g5rfvk1.mongodb.net/";

Mongoose.connect(dbUrl)
	.then(() => {
		console.log("MongoDB connected!");
	})
	.catch((err) => console.log(err));

export default Mongoose;
