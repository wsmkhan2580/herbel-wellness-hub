import { Router } from 'express';
import { createLead, deleteLead, exportLeads, getLead, leadStats, listLeads } from '../controllers/leadController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.post('/', createLead);
router.get('/stats', requireAuth, leadStats);
router.get('/export', requireAuth, exportLeads);
router.get('/', requireAuth, listLeads);
router.get('/:id', requireAuth, getLead);
router.delete('/:id', requireAuth, deleteLead);
export default router;
