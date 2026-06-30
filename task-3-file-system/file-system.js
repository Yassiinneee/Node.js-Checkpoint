const fs = require("fs");

// Create welcome.txt
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("welcome.txt created successfully.");
});

// Read hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});