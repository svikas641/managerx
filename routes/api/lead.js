const express =  require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Lead = require('../../models/Lead');
const User = require('../../models/User');

// TODO: VALIDATION

// @route   POST api/lead/
// @desc    add a new lead
// @access  Private

router.post('/',auth, async (req,res)=>{
	try {
		const user = await User.findById(req.user.id).select('-password');

      const newLead = new Lead({
        user: req.user.id,
        companyName: req.body.companyName,
        clientName: req.body.clientName,
        clientEmail: req.body.clientEmail,
        clientPhoneNumber: req.body.clientPhoneNumber,
        clientAddress: req.body.clientAddress,
        pincode: req.body.pincode,
        salesPerson: user.name
      });

      const lead = await newLead.save();

      res.json(lead);
	} catch(e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

// @route   GET api/lead/me
// @desc    get all pending leads by a user
// @access  Private

router.get('/pending',auth, async (req,res)=>{
	try {
		const leads = await Lead.find({
			user: req.user.id,
			status: { $ne: "Done" }
		});
		res.json(leads);
	} catch(e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

// @route   GET api/lead/me
// @desc    get all leads by a user
// @access  Private

router.get('/',auth, async (req,res)=>{
	try {
		const leads = await Lead.find({user: req.user.id});
		res.json(leads);
	} catch(e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});


// @route    GET api/lead/:id
// @desc     Get lead by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !lead) {
      return res.status(404).json({ msg: 'Lead not found' });
    }

    res.json(lead);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    POST api/lead/feedback/:id
// @desc     add feedback on a lead
// @access   Private
router.post(
  '/feedback/:id',
  [
    auth,
  ],
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const lead = await Lead.findById(req.params.id);

	     const newVisit = {
			commentBox: req.body.commentBox,
			status: req.body.status,
			clientName: req.body.clientName,
	        clientEmail: req.body.clientEmail,
	        clientPhoneNumber: req.body.clientPhoneNumber
	     }

	     lead.visits.unshift(newVisit);

      await lead.save();

      res.json(lead.visits);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;