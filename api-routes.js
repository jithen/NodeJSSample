// Initialize express router
let router = require('express').Router();

router.use('/fileupload', require('./fileupload'));

// Export API routes
module.exports = router;
