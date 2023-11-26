const router = require("express").Router();
const conn = require("../db/config");

router.post('/', (req, res) => {
    const { title, pageqty } = req.body;
    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;

    const data = ['title', 'pageqty', title, pageqty];
    
    conn.query(sql, data, (err) => {
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


router.get('/:id', (req, res) => {
    const { id } = req.params;

    const sql = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    conn.query(sql, data, (err, data) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        return res.status(200).send(data);
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, pageqty } = req.body;

    const sql = `UPDATE books SET ?? = ?, ?? = ?  WHERE ?? = ?`;
    const data = ['title', title, 'pageqty', pageqty, 'id', id];

    conn.query(sql, data, (err) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        return res.status(200).send({ message: "success" });
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM books WHERE ?? = ?`;
    const data = ['id', id];

    conn.query(sql, data ,(err) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        return res.status(200).send({ message: "success" });
    })
})

module.exports = router;