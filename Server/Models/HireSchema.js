const mongooose = require("mongoose");
const schema = mongooose.Schema;

const HireSchema = schema({
   name:{
       type : String,
       required: true
   },
   email:{
       type : String,
       required: true
   },
  Contact:{
       type : String,
       required: true
   },
   city:{
       type : String,
       required: true
   },
   Message :{
    type : String,
    required: true
   }
});

module.exports = mongooose.model("HIREME", HireSchema);
