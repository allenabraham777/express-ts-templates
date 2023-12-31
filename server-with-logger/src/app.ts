import express, { Request, Response, Express } from "express";
import { errorHandler } from "utils/errorHandler";
import Logger from "utils/logger/Logger";
import FileLogger from "utils/logger/FileLogger";
import LoggerService from "services/LoggerService";
import routeLoggerMiddleware from "middlewares/routeLogger";

const app: Express = express();

const logger = new Logger();
const fileLogger = new FileLogger("server.log");

const loggerService = LoggerService.getInstance();

loggerService.registerLogger(logger);
loggerService.registerLogger(fileLogger);

app.use(routeLoggerMiddleware);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server running successfully" });
});

app.use(errorHandler);

export default app;
