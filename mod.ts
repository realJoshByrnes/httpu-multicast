import HttpuCore from "@realjoshbyrnes/httpu-core";

export default class HttpuMulticast extends HttpuCore {
  constructor(url: string | URL, method: string = "NOTIFY") {
    super(url, method);
  }

  protected get _defaultPath(): string {
    return '*';
  }
}