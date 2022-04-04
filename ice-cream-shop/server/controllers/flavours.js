const Flavour = require("../models/Flavour");

// @desc    Get all flavours
// @route   GET /api/flavours
// @access  Public
exports.getFlavours = async (req, res, next) => {
  try {
    const lisitngs = await Flavour.find();

    res.status(200).json({
      success: true,
      count: lisitngs.length,
      data: lisitngs,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Get a single flavour
// @route   GET /api/flavours/:id
// @access  Public
exports.getFlavour = async (req, res, next) => {
  try {
    const lisitng = await Flavour.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: lisitng,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Create new flavour
// @route   POST /api/flavours
// @access  Private
exports.createFlavour = async (req, res, next) => {
  const flavour = await Flavour.create(req.body);
  res.status(201).json({
    success: true,
    data: flavour,
  });
};

// @desc    Update a flavour
// @route   PUT /api/flavours/:id
// @access  Private
exports.updateFlavour = async (req, res, next) => {
  try {
    const flavour = await Flavour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!flavour) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: flavour,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Delete a flavour
// @route   DELETE /api/flavours/:id
// @access  Private
exports.deleteFlavour = async (req, res, next) => {
  try {
    const flavour = await Flavour.findByIdAndDelete(req.params.id);
    if (!flavour) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};
