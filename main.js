const express = require("express");
const app = express();
const port = 5000;
const timeCheck = (req, res, next) => {
    const time = new Date();
    if (
        time.getDay() == 0 ||
        time.getDay() == 6 ||
        time.getHours() < 9 ||
        time.getHours() > 17
    ) {
        return res.sendFile(__dirname + "/Public/closeTime.html");
    }
    next();
};

app.use("/home|/services|/contact", timeCheck);

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/Public/index.html");
});
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/Public/style.css");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/Public/services.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Public/contact.html");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
