import {fetchEventSource} from '@microsoft/fetch-event-source';

const serverBaseURL = "http://localhost:5000";

const fetchData = async () => {
    await fetchEventSource(`${serverBaseURL}/sse`, {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
      },
      fetch: fetch,
      onopen(res) {
        console.log('on open');

        if (res.ok && res.status === 200) {
          console.log("Connection made ", res);
        } else if (
          res.status >= 400 &&
          res.status < 500 &&
          res.status !== 429
        ) {
          console.log("Client side error ", res);
        }
      },
      onmessage(event) {
        console.log("new message");
        console.log(event.data, Date.now());
      },
      onclose() {
        console.log("Connection closed by the server");
      },
      onerror(err) {
        console.log("There was an error from server", err);
      },
    });
  };
  fetchData();