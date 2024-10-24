import{Router} from 'express'
import { createBooks, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/books.controller';
const bookRouter = Router();

bookRouter.get("/", getAllBooks)
bookRouter.post("/", createBooks)
bookRouter.get("/:id", getBookById)
bookRouter.put("/:id", updateBook  )
bookRouter.delete("/:id", deleteBook  )


export default bookRouter