/**
 * @module HttpuMulticast
 * @description This module provides the HttpuMulticast class which extends the HttpuCore class.
 */

import HttpuCore from "@realjoshbyrnes/httpu-core";

/**
 * Class representing an HTTPU Multicast.
 * @extends HttpuCore
 */
export default class HttpuMulticast extends HttpuCore {
  /**
   * Create an HttpuMulticast instance.
   * @param {string | URL} url - The URL to send the request to.
   * @param {string} [method=NOTIFY] - The HTTP method to use.
   */
  constructor(url: string | URL, method: string = "NOTIFY") {
    super(url, method);
  }

  /**
   * Get the default path for the request.
   * @protected
   * @returns {string} The default path.
   */
  protected get _defaultPath(): string {
    return '*';
  }

  /**
   * Get the default protocol for the request.
   * @protected
   * @returns {string} The default protocol.
   */
  protected get _defaultProtocol(): string {
    return 'httpmu:';
  }
}