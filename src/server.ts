import App from "./app";
import envConfig from "./configs/env.config";
import logUtil from "./utils/log.util";

class Server {
  private readonly app: App;

  constructor(
    private readonly port: number = envConfig.port,
    private readonly mode: string = envConfig.env
  ) {
    this.app = new App();
  }

  public start(): void {
    this.app.express.listen(this.port, () => {
      logUtil.info(`Server running on port: ${this.port} in ${this.mode} mode`);
    });
  }
}

new Server().start();
