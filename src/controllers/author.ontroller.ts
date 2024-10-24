import { PrismaClient } from "@prisma/client";




const authorClient = new PrismaClient().author
// getAllAuthor and books for the author 
export const getAllAuthor =async (req, res)=>{
    try {
        const Allauthors = await authorClient.findMany({
            include:{
                books:true
            }
        })

        res.status(200).json(Allauthors)
    } catch (error) {
        console.error("Error retriving autors", error)
        res.status(500).json({error: "failed to fetch data"})
    }
}

// getAuthor by id 

export const getAuthor= async(req, res)=>{
    const {id} = req.params
    const author = await  authorClient.findUnique({
        where:{
            id:id
        },
        include: {
            books:true
        }
    })

    res.status(200).json(author)
}

// createAuthor 
export const createAuthor = async(req, res)=>{
    const data = req.body
    try {
        const author = await authorClient.createMany({data});
        res.status(201).json(author)
    } catch (error) {
        console.log({error: "Failed to create"})
        res.status(404).json({message: "Failed to create author"})
    }
  

}

// update Author by id

export const updateAuthor = async(req, res)=>{
    const {id} = req.params;
    const data = req.body
    try {
        const author = await authorClient.update({
            where:{
                id:id
            },
            data:data,
        })
        res.status(200).json({data: author})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"failed to update"
        })
    }
   

}

export const deleteAuthor= async(req, res)=>{
    const {id} = req.params
    try {
        
        const author = await authorClient.delete({
            where:{id},
            
        
        })
        res.status(200).json({data:[]})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to delete"})
    }
}