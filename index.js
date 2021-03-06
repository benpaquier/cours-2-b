const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// necessaire pour acceder au req.body lors du submit d'un form
app.use(express.urlencoded({ extended: true }))

app.get("/hello", (req, res) => {
  res.send("hello")
})

app.get("/", (req, res) => {
  // res.render va chercher le 'views/layouts/main'
  // => le 'views/layouts/main, il va remplacer le {{{body}}}
  //    par le parametre de 'render'
  // ici le parametre c'est home
  res.render('home', {
    // utilistion du layout `custom.handlebars`
    layout: 'new'
  })
})

app.get("/about", (req, res) => {
  res.render('about')
})

app.get("/profile", (req, res) => {
  const name = "Kevin"

  res.render('profile', {
    // on passe la variable name au template/page 'profile'
    name: "Benoit",
    // on passe la variable boolean isBenoit au template/page 'profile'
    isBenoit: name === "Benoit",
    names: [
      "Kevin",
      "Ahmed", 
      "Vincent"
    ]
  })
})

app.post('/form/signup', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
