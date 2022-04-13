import { mountLayoutWithWebSocket } from "https://esm.sh/idom-client-react@0.38.0-a1";

// get the correct web socket protocol
let wsURL;
if (window.location.protocol === "https:") {
    wsURL = "wss:";
} else {
    wsURL = "ws:";
}
wsURL += "//" + window.location.host;

// append path to the web socket
wsURL += "/_idom/stream";

// only needed for views that use web modules
const loadImportSource = (source, sourceType) =>
    sourceType == "NAME"
        ? import("_idom/_modules/" + source)
        : import(source);

mountLayoutWithWebSocket(
    document.getElementById("idom-app"),
    wsURL,
    //loadImportSource
);