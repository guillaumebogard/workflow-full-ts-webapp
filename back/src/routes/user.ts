import { Router } from 'express';

import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user';

export const router = Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
