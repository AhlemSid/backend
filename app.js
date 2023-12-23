const express =require('express');
const mongoose =require("mongoose");
const dotenv =require('dotenv');
const cors=require("cors")
const categorie = require('./models/categorie');
const app = express();
app.use(cors())
const categorieRouter=require("./routes/categorie.route")
dotenv.config()
app.use(express.json());
const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);
const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter);

// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données',
err);
process.exit();
});

app.get("/",(req,res)=>{
res.send("Bibliothèque");
});
app.use('/api/categories', categorieRouter);
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;