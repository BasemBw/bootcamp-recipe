const express = require('express');
const { json } = require('express/lib/response');
const path = require('path')
var urllib = require('urllib');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity',function(req,res){
    res.send("ok")

})

app.get('/recipes/:ingredient',function(req,response){
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, function (err, data, res) {
        if (err) {
          throw err;
        }
        let results = JSON.parse(data).results
        let Newdata = results.map(Element => {return {ingredients:Element.ingredients , title:Element.title , thumbnail:Element.thumbnail , href:Element.href}})
        response.send(Newdata)
      });
})
const port = 8080 
app.listen(port, function () {

})