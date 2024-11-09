import dotenv from "dotenv";
import ora from "ora";
import chalk from "chalk";
import mongoose from "mongoose";

dotenv.config();

async function connectDB() {
  try {
    const spin = ora("connecting to DB...").start();
    await mongoose.connect(process.env.DB_STRING);
    spin.stop();
    console.log(chalk.green("connected to db."));
  } catch (error) {
    console.log(chalk.bgRed.white("failed to connect to db"));
    console.log(chalk.red(error));
    process.exit(1);
  }
}

async function disConnectDB() {
  try {
    await mongoose.disconnect();
    console.log(chalk.green("db disconnected"));
  } catch (error) {
    console.log(chalk.red("db failed to disconnect"));
    console.log(chalk.red(error));
    process.exit(1);
  }
}

connectDB();
disConnectDB();
