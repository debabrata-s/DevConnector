const express = require('express');
const router = express.Router();


//@route get api/posts/tests
//@desc tests posts route
//@access public
router.get('/test', (req,res) => res.json({ msg: 'Posts works'}));

module.exports = router;