class HttpStatus {
  static readonly CONTINUE = 100;

  static readonly OK = 200;
  static readonly CREATED = 201;
  static readonly ACCEPTED = 202;
  static readonly NO_CONTENT = 204;

  static readonly MOVED_PERMANENTLY = 301;
  static readonly FOUND = 302;

  static readonly BAD_REQUEST = 400;
  static readonly UNAUTHORIZED = 401;
  static readonly FORBIDDEN = 403;
  static readonly NOT_FOUND = 404;
  static readonly CONFLICT = 409;
  static readonly UNPROCESSABLE_ENTITY = 422;

  static readonly INTERNAL_SERVER_ERROR = 500;
  static readonly BAD_GATEWAY = 502;
  static readonly SERVICE_UNAVAILABLE = 503;

  static isError(status: number): boolean {
    return status >= 400;
  }

  static isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
  }
}

export default HttpStatus;
