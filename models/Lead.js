const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  clientName: {
            type: String,
            required: true
          },
  clientEmail: {
            type: String,
            required: true
          },
  clientPhoneNumber: {
            type: Number,
            required: true
          },
  clientAddress: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
  // clientProfile1:[{
  //           clientName: {
  //           type: String,
  //           required: true
  //         },
  //         clientEmail: {
  //           type: String,
  //           required: true
  //         },
  //         clientPhoneNumber: {
  //           type: Number,
  //           required: true
  //         }
  //       }],
  // clientProfile2:[{
  //         clientName: {
  //         type: String
  //       },
  //       clientEmail: {
  //         type: String
  //       },
  //       clientPhoneNumber: {
  //         type: Number
  //       }
  //     }],
  // clientProfile3:[{
  //         clientName: {
  //         type: String
  //       },
  //       clientEmail: {
  //         type: String
  //       },
  //       clientPhoneNumber: {
  //         type: Number
  //       }
  //     }],
  commentBox: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  salesPerson:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Lead = mongoose.model('lead', LeadSchema);