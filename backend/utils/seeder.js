import colors from "colors";
import User from "../modals/userModel.js";
import Order from "../modals/orderModel.js";
import Reservation from "../modals/reservationModel.js";
import MenuItem from "../modals/menuItemModel.js";
import FoodData from "../data/FoodData.js";
import users from "../data/users.js";
import dotenv from "dotenv";
import ConnectDB from "../config/db.js";

dotenv.config();

ConnectDB();

const importData = async () => {
  try {
    await Reservation.deleteMany();
    await User.deleteMany();
    await MenuItem.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const SampleFoods = FoodData.map((item) => {
      return { ...item, user: adminUser };
    });
    await MenuItem.insertMany(SampleFoods);
    console.log("Data import successfully".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await User.deleteMany();
		await Product.deleteMany();

		console.log('Data destroyed'.red.inverse);
		process.exit();
	} catch (err) {
		console.error(`${err}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
