class HttpStatus {
  // 100s - Informational
  static readonly CONTINUE = 100;

  // 200s - Success
  static readonly OK = 200;
  static readonly CREATED = 201;
  static readonly ACCEPTED = 202;
  static readonly NO_CONTENT = 204;

  // 300s - Redirection
  static readonly MOVED_PERMANENTLY = 300;
  static readonly FOUND = 302;
  static readonly NOT_MODIFIED = 304;

  // 400s - Clien Error
  static readonly BAD_REQUEST = 400;
  static readonly UNAUTHORIZED = 401;
  static readonly FORBIDDEN = 403;
  static readonly NOT_FOUND = 404;
  static readonly CONFLICT = 409;
  static readonly UNPROCESSABLE_ENTITY = 422;

  // 500s - Server Error
  static readonly INTERNAL_SERVER_ERROR = 500;
  static readonly BAD_GATEWAY = 502;
  static readonly SERVICE_UNAVAILABLE = 503;
  static readonly GATEWAY_TIMEOUT = 504;

  static isError(code: number): boolean {
    return code >= 400;
  }

  static isSucces(code: number): boolean {
    return code >= 200 && code < 300;
  }
}

export default HttpStatus;
