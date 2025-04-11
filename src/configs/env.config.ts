import dotenv from "dotenv";
import path from "path";

class EnvConfig {
  public readonly port: number;
  public readonly env: string;
  public readonly origin: string;

  constructor() {
    this.loadEnvFile();
    this.port = parseInt(this.get("APP_PORT", "9000"));
    this.env = this.get("APP_ENB", "development");
    this.origin = this.get("APP_ORIGIN", "http://localhost:3000");
  }

  private loadEnvFile(): void {
    dotenv.config({
      path: path.join(process.cwd(), ".env.local"),
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

export default new EnvConfig();
