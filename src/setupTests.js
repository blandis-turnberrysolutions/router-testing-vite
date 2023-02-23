import "@testing-library/jest-dom";

import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from "util";
import { fetch, Request, Response } from "@remix-run/web-fetch";
import { AbortController as NodeAbortController } from "abort-controller";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

globalThis.fetch = fetch;
globalThis.Request = Request;
globalThis.Response = Response;
globalThis.AbortController = NodeAbortController;
globalThis.TextEncoder = NodeTextEncoder;
globalThis.TextDecoder = NodeTextDecoder;

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
