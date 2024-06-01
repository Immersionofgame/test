const express = require('express');
const ClsNongli = require('./cls_nongli'); // 引入cls_nongli模块
const app = express();
// const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Date Converter</h1>
            <form action="/convert" method="post">
                <input type="number" name="year" placeholder="Year" required>
                <input type="number" name="month" placeholder="Month" required>
                <input type="number" name="day" placeholder="Day" required>
                <button type="submit">Convert</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/convert', (req, res) => {
    const { year, month, day } = req.body;
    const result = ClsNongli.convertSolarToLunar(parseInt(year), parseInt(month), parseInt(day));
    res.send(`Converted Date: ${result}`);
});

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });



const port = 80;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
