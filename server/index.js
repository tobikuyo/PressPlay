const mongoose = require("mongoose");
const app = require("./server");

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(port, () => {
    console.log(`App is listening at port: ${port}`);
});
