const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
// // tạo biến lưu trữ 1 đối tượng bao gôm các key kết nối mysql
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
}
// Tạo biến database = tạo cái kết nối trong mysql với 
// tham số là biến lưu trữ đối tượng
const db = mysql.createConnection(config);

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "signup"
// });


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    // console.log(values)
    // query có thể là một phương thức dùng để truy vấn dữ liệu trong cơ sở dữ liệu

    db.query(sql, [values], (err, data) => {
        // console.log(values)
        if (err) {
            return res.json("error", err);
        }
        else {
            return res.json(data);
        }
    })
})


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `name`= ? AND `password` = ?";
    // console.log(req.body)
    db.query(sql, [req.body.name, req.body.password], (err, data) => {

        if (err) {
            return res.json("error")
        }
        if (data.lenght > 0) {
            return res.json("success")
        } else {
            return res.json('Faile')
        }
    });
});

app.get('/', (req, res) => {
    return res.json('success')
})


db.connect((err) => {
    if (err) {
        console.log("Lỗi không thể kết nối mySQL", err)
    } else {
        console.log("Kết nối thành công với mySQL")
    }
})

app.listen(8081, () => {
    console.log('listening on port');
})