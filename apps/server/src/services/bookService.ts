import BookModel from "../models/bookModel";

const book = new BookModel({
	bookId: 200101,
	bookName: "MongoDB数据库教程",
	publishing: "机械工业出版社",
	publishTime: "2005-10-27",
	price: 56,
	count: 10,
});

const createBook = async () => {
	try {
		const result = await book.save();
		return result;
	} catch (error) {
		console.log(error);
	}
};

const getBookList = async () => {
	try {
		const result = await BookModel.find();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default {
	createBook,
	getBookList,
};
