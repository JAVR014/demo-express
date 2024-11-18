const Express=require("express")
const app=Express()

const products=[
    {id:1, name:"Zapatos"},
    {id:2, name:"Camisa"},
    {id:3, name:"Pantalon"},
    {id:4, name:"Falda"},
    {id:5, name:"Vestido"},
    {id:6, name:"Chaqueta"},
]
app.get("/",(req,res)=>{
    const output={
        code:200,
        message:"Api en funcionamient"
    }
    return res.send(output).status(200)
})

app.get("/products",(req, res)=>{
    return res.send(products).status(200)

})
app.get("/products/:id",(req, res)=>{
    const singleProduct=products.find(prod=>prod.id==req.params.id)
    return res.send(singleProduct).status(200)
        
})
app.post("/products",(req, res)=>{})
app.patch("/products/:id",(req, res)=>{})
app.delete("/products/:id",(req, res)=>{})



app.listen(3000,()=>console.log("Escuchando..."))