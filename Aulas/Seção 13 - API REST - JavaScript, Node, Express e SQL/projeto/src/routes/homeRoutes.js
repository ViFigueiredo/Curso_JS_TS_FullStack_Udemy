import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('teste de render');
});

export default router;
