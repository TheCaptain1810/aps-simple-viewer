const express = require("express");
const { PORT } = require("./config");

const app = express();
app.use(express.static("wwwroot"));
app.use(require("./routes/auth.js"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
