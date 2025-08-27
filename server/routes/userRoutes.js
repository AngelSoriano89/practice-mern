import express from 'express';
import { getAllUsers, create, getUserById, updateUserById, deleteUserById } from '../controller/userController.js';

const router = express.Router();

router.post('/users', create);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/update/users/:id', updateUserById);
router.delete('/delete/users/:id', deleteUserById);

export default router;

