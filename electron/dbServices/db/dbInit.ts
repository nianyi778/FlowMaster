import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_CONFIG, APP_NAME } from "../../utils/constants";
import { getAppHand } from "../../utils";
import { User } from "./entity/user";
import path from "node:path";
export let dataSource: DataSource;
export const dbConnectionHand = async () => {
  console.log("dataBase111");
  const dataBase = path.join(getAppHand(), APP_NAME, DB_CONFIG.dbFileName);
  console.log(dataBase, "dataBase");
  dataSource = new DataSource({
    type: "sqlite",
    // 完整文件路径
    database: dataBase,
    logging: true,
    logger: "simple-console",
    synchronize: true,
    entities: [User],
    // path.join(__dirname, "./entity/*.ts")
  });
  dataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err: unknown) => {
      console.error("Error during Data Source initialization", err);
    });
};
