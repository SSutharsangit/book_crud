const express=require("express");
const router=express.Router();
const Book =require("../model/book")
// create new book
router.post("/create",async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            res.send("you should fill all input fileds! try again");
          }
          const newbook ={
              title :req.body.title,
              author:req.body.author,
              publishyear:req.body.publishyear
          }
          const book = await Book.create(newbook);
          res.status(200).send({book});
          console.log("newbook saved successfuly");
         
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
     


    
})
//get all book
router.get("/books",async(req,res)=>{
    try {
        const book =await Book.find({});
       res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}
)
// get one book by using id 
router.get("/books/:id",async(req,res)=>{
    try {
        const id =req.params.id;
        const book =await Book.find({"_id":id});
        console.log(book);
       res.status(200).json(book);
    } catch (error) {
       console.log(error.message);
        res.status(500).send({message:error.message});
    }
}
)
//upadte book
router.put("/books/:id",async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            res.send("you should fill all input fileds! try again");
          }
        const {id}=req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body);
        if(!updatedBook){
            res.status(404).send({message:"book not found! your book id is wrong"});
        }
        res.status(200).send({message:updatedBook});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})
//delete book
router.delete("/books/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({message:"book not found! your book id is wrong"});
        }
        res.status(200).send({message:"book is deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})



module.exports = router;