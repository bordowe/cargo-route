const concurrently = require("concurrently")

concurrently([
    {
        command: "npm run start:api",
        name: "API",
        prefixColor: "white.bgBlue",
    },
    {
        command: "npm run start:app",
        name: "APP",
        prefixColor: "white.bgYellow",
    },
])
