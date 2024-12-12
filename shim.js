import {abortableFetch as abortableFetchFactory} from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { Headers } from "headers-polyfill";


export {
  AbortController,
  AbortSignal,
} from 'abortcontroller-polyfill/dist/cjs-ponyfill';

const {fetch: abortableFetch, Request: AbortableRequest} = abortableFetchFactory({
  fetch,
  Request
});
export {abortableFetch as fetch, AbortableRequest as Request};


const globalThisShim = typeof globalThis !== "undefined" ? globalThis : window;
export { Headers, globalThisShim as globalThis };
