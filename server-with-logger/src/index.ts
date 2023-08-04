import dotenv from "dotenv";
import app from "app";
import LoggerService from "services/LoggerService";

const loggerService = LoggerService.getInstance();

dotenv.config();

const port = process.env.PORT || 3001;

try {
  app.listen(port, () => {
    loggerService.log(`Server is running at port ${port}`);
  });
} catch (error) {
  loggerService.error(`${error}`);
  process.exit(0);
}
