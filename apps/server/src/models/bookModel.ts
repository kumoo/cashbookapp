import Mongoose from "../db";
const Schema = Mongoose.Schema;

const BookSchema = new Schema({
	bookId: { type: Number },
	bookName: { type: String },
	publishing: { type: String },
	publishTime: { type: Date },
	price: { type: Number },
	count: { type: Number },
});

export default Mongoose.model("Book", BookSchema);
