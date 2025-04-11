import dotenv from "dotenv";
import path from "path";

class getEnv {
  public readonly port: number;
  public readonly env: string;
  public readonly origin: string;

  constructor() {
    this.loadEnv();
    this.port = parseInt(this.get("APP_PORT", "9000"), 10);
    this.env = this.get("APP_ENV", "development");
    this.origin = this.get("APP_ORIGIN");
  }

  private loadEnv(): void {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.local"),
    });
  }

  private get(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (!value && !defaultValue) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return value ?? defaultValue!;
  }
}

const Env = new getEnv();

export default Env;
