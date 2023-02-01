import { Router } from 'express';

import {
  getAllUsers,
} from '../controllers/users';

export const router = Router();

router.get('/', getAllUsers);

export default router;
