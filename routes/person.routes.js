import express from 'express';
import { createPerson, deletePerson, getAllPersons, updatePerson } from '../controllers/person.controllers.js';

const router = express.Router();


router.get('', getAllPersons);
router.post('', createPerson);
router.patch('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;