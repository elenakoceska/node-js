const fs = require("fs");

const read = async (filename) => {
    return new Promise((success, fail) => {
        fs.readFile  (filename, "utf-8", (err, data) => {
            if(err) return fail(err);
        })
    })
};