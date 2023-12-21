const express =require('express');
const mongoose =require("mongoose");
const dotenv =require('dotenv');
const categorie = require('./models/categorie');
const app = express();
const categorieRouter=require("./routes/categorie.route")
dotenv.config()
app.use(express.json());
const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);

// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
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