const router = require("express").Router();
const conn = require("../db/config");

router.post('/', (req, res) => {
    const { title, pageqty } = req.body;
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;
    
    conn.query(sql, (err) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        console.log('book created', title);
        return res.status(201).send({ message: "success" });
    })
})

router.get('/', (req, res) => {
    const sql = `SELECT * FROM books`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        return res.status(200).send(data);
    })
})

module.exports = router;