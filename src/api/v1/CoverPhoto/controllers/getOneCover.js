// controllers/coverController.js

const Cover = require("../../../../models/cover");

const getOneCover = async (req, res, next) => {
  try {
    const email = req.params.email;
    const result = await Cover.findOne({ email });

    if (!result) {
      return res.status(404).json({ success: false, error: 'Cover photo not found' });
    }

    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getOneCover ;




