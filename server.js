const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

let db

const url = process.env.MONGODB_URI
const dbName = 'community_suggestion_board'

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('suggestions').find().toArray((err, result) => {
    if (err) return res.send(err)
    res.render('index.ejs', { suggestions: result })
  })
})

app.post('/suggestions', (req, res) => {
  db.collection('suggestions').insertOne({
    title: req.body.title,
    description: req.body.description
  }, (err, result) => {
    if (err) return res.send(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/suggestions/:id/edit', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.redirect('/')

  db.collection('suggestions').findOne({ _id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) return res.send(err)
    if (!result) return res.redirect('/')
    res.render('edit.ejs', { suggestion: result })
  })
})

app.post('/suggestions/:id/edit', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.redirect('/')

  db.collection('suggestions').findOneAndUpdate({ _id: new ObjectID(req.params.id) }, {
    $set: {
      title: req.body.title,
      description: req.body.description
    }
  }, {
    returnOriginal: false
  }, (err, result) => {
    if (err) return res.send(err)
    if (!result.value) return res.redirect('/')
    res.redirect('/')
  })
})

app.post('/suggestions/:id/delete', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.redirect('/')

  db.collection('suggestions').findOneAndDelete({ _id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/')
  })
})

app.listen(3000, () => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");
  });
});
