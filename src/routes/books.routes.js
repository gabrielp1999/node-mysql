const router = require("express").Router();
const conn = require("../db/config");

router.post('/', (req, res) => {
    const { title, pageqty } = req.body;
    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;
    
    conn.query(query, (err) => {
        if(err){
            console.log('err:', err);
            return res.status(500).send({ message: `err: ${err}`});
        }

        console.log('boock created', title);
        return res.status(201).send({ message: "success" });
    })
})

module.exports = router;