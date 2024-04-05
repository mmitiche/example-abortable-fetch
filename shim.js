export {
  AbortController,
  AbortSignal,
} from "abortcontroller-polyfill/dist/cjs-ponyfill";
import { abortableFetch } from "abortcontroller-polyfill/dist/cjs-ponyfill";
import {
  fetch as fetchPonyfill,
  Request as RequestPonyfill,
} from "whatwg-fetch";

const { fetch, Request } = abortableFetch({
  fetch: fetchPonyfill,
  Request: RequestPonyfill,
});

export { fetch, Request };
