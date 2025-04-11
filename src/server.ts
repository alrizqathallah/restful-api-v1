import App from "./app";
import Env from "./configs/env.config";
import logger from "./utils/logger";

class Server {
  public app: App;
  public port: number;
  public env: string;

  constructor() {
    this.app = new App();
    this.port = Env.port;
    this.env = Env.env;
  }

  public start(): void {
    this.app.express.listen(this.port, () => {
      logger.info(`Server runnig on port ${this.port} in ${this.env} mode`);
    });
  }
}

const server = new Server();

server.start();
