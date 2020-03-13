const express = require("express")
const router = express.Router()
const config = require('config')

const sha512 = require('js-sha512')
const randomSalt = require('../utils/randomstring')
const jwt = require('jsonwebtoken')

const conn = require('../db')

router.post("/register", (req, res, next) => {
  const username = req.body.username
  const salt = randomSalt(20)
  const password = sha512(req.body.password + salt)

  const checkSql = `SELECT count(1) as count FROM users WHERE username = ?;`

  conn.query(checkSql, [username], (err, results, fields) => {
    if (results[0].count > 0) {
      res.status(409).json({
        message: 'username exists'
      })
    } else {
      const sql = `INSERT INTO SlackingUsers.Users (username, password, salt) VALUES (?, ?, ?);`

      conn.query(sql, [username, password, salt], (err1, results1, fields1) => {
        res.json({
          un: `You, ${username}, have been added successfully.`
        })
      })
    }
  })
})

router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  const getSql = `SELECT username, salt, password FROM users WHERE username = ?;`

  conn.query(getSql, [username], (salterr, saltresults, saltfields) => {
    if (saltresults.length > 0) {
      const salt = saltresults[0].salt
      const userpass = saltresults[0].password

      if (sha512(password + salt) === userpass) {
        //Log them in
        const token = jwt.sign({ username: username }, config.get('secret'))

        res.json({
          token: token
        })
      } else {
        res.status(401).json({
          message: 'invalid username or password'
        })
      }

    } else {
      res.status(401).json({
        message: 'invalid username or password'
      })
    }
  })
})

module.exports = router
