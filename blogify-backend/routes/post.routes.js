const express = require('express');
const router = express.Router();

const protect = require('../middleware/auth.middleware');
const {
  createPost,
  deletePost
} = require('../controllers/post.controller');

router.post('/', protect, createPost);
router.delete('/:id', protect, deletePost);

module.exports = router;
