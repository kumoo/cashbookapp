import Mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: `.env.local` });

const dbUrl = process.env.MONGO_URL!;

Mongoose.connect(dbUrl);

//建立连接---连接成功触发connected事件
Mongoose.connection.on("connected", function () {
	console.log("数据库连接成功！连接地址是：" + dbUrl);
});
//连接异常 --- 回调函数的参数中保存了异常的信息
Mongoose.connection.on("error", function (err) {
	console.log("数据库连接异常！" + err);
});
// 断开连接
Mongoose.connection.on("disconnectied", function () {
	console.log("断开数据库的连接!");
});

export default Mongoose;
