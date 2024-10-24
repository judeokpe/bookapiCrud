import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().books

export const getAllBooks = async(req, res)=>{
    try {
    const allBooks = await bookClient.findMany()
    res.status(200).json({data:allBooks})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Error fetvhing book"})
    }
}

// get Book by id 

export const getBookById = async(req, res)=>{
    const {id:bookId} = req.params;
    try {
    const book = await bookClient.findUnique({where:{id:bookId}})

    if(!book) return res.status(404).json({"message": "Book with the Id is not found"})
    res.status(200).json({data:book})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Failed to fetch data"})
    }
}


// create book 
export const createBooks = async(req, res)=>{
    try {
        const bookData = req.body
        const book = await bookClient.create({
        data:{
            title: bookData.title,
            datePublished: bookData.datePublished,
            author:{
                connect: {id:bookData.authorId}
            }
        }
        })
        res.status(201).json({data:book})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to create Book"})
    }
}

// update book 

export const updateBook = async(req, res)=>{
    const {id}= req.params
    const bookData = req.body
    try {
        const updatedBook = await bookClient.update({
            where:{
                id
            },
            data:bookData

        })

        if(!updateBook){
            return res.status(404).json({"message": "Record not found"})
        }
        res.status(200).json({updatedBook})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to update"})
    }
}

// delete book 
export const deleteBook = async(req, res)=>{
    const {id} = req.params
    try {
        const book = await bookClient.delete({where:{id}})
        res.status(200).json({message:"Book deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to Delete Item"})
    }
}