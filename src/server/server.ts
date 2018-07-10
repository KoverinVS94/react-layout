import Raven from "raven-js";
import express from "express";

import { Meta, fingerprint, renderView } from "./middleware";

declare const PORT: number;
const meta: Meta = require("../../meta.json");

if (process.env.RAVEN_DSN) {
    Raven.config(process.env.RAVEN_DSN, {
        release: process.env.BUILD_VERSION as string,
        tags: {
            build_time: process.env.BUILD_TIME as string,
        },
    }).install();
}

express()
    .disable("x-powered-by")
    .use("/static/icons", express.static(process.cwd() + "/favicons/icons"))
    .use("/static", express.static(process.cwd() + "/web"))
    .use(fingerprint(meta))
    .get("*", renderView)
    .listen(PORT, () => {
        console.log(`Listeting on ${PORT}`);
    });
