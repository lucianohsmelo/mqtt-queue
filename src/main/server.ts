import express from "express";

const app = express();
app.use("/ui", express.static("public"));

app.listen(8000, () => console.log("Server running"));
