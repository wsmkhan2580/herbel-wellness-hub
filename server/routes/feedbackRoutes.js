import { Router } from 'express';
import {
  createFeedback,
  deleteFeedback,
  listFeedback,
  listPublicFeedback,
  setFeedbackApproval
} from '../controllers/feedbackController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.post('/', createFeedback);
router.get('/public', listPublicFeedback);
router.get('/', requireAuth, listFeedback);
router.patch('/:id/approval', requireAuth, setFeedbackApproval);
router.delete('/:id', requireAuth, deleteFeedback);

export default router;
