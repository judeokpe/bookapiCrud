import {Router} from 'express';

import {deleteAuthor, getAllAuthor, updateAuthor} from "../controllers/author.ontroller"
import {getAuthor} from "../controllers/author.ontroller"
import { createAuthor } from '../controllers/author.ontroller';
const authorRouter = Router();

// ----------------------------------------------------------
authorRouter.get('/', getAllAuthor)
authorRouter.get('/:id', getAuthor)
authorRouter.put('/:id', updateAuthor)
authorRouter.delete('/:id', deleteAuthor)
authorRouter.post('/', createAuthor )

export default authorRouter

// ------------------------------------------------------------------------

