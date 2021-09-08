const httpStatus = require("http-status");
const db = require("../server");
const query = require("../query/query");
const moment = require("moment");
const { generatePassword,} = require("../helpers/commonfile");
const jwt = require("jsonwebtoken");
const userColl = db.collection("user");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const bcrypt = require('bcrypt');

const createuser = async (req, res, next) => {
  try {
    const requestdata = { email: req.body.email };

    const userEmail = await query.findOne(userColl, requestdata);
    if (userEmail) {
      const message = `You have already registered with email`;
      let obj = resPattern.errorPattern(httpStatus.ALREADY_REPORTED, message);
      return res.status(obj.code).json(obj);
    } else {
      if (req.body.type === "") {
        if (insertdata.ops > 0) {
          const token = jwt.sign(
            {
              _id: insertdata.ops[0]._id,
              email: insertdata.ops[0].email,
            },
            process.env.JWT_SECRET
          );
        }
      } else {
        const user = req.body;
        user.password = generatePassword(req.body.password);

        const insertdata = await query.insert(userColl, user);
        return res.status(200).json({insertdata});
      }
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};


// userLogin

const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const reqData = { email: email }
    // find user
    let user = await query.findOne(userColl, reqData)

    if (!user || user.password == null) {
      const message = `Incorrect email or password.`;
      let obj = resPattern.errorPattern(httpStatus.NOT_FOUND, message);
      return res.status(obj.code).json(obj);
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      console.log("false");
      return res.status(400).json({isMatch});
    }
    else{
      console.log("true");
      return res.status(200).json({isMatch})
      
    }
  } 
  catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}






// router.post("/usercreate", function (req, res) {
//   const createdAt = moment.utc().format();
//   db.collection("user").insertOne(
//     {
//       user_id: req.body.user_id,
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       password: req.body.password,
//       createdAt: createdAt,
//     },
//     function (err, info) {
//       console.log(err, "Error");
//       res.send(info);
//     }
//   );
// });


module.exports = {
  createuser,
  login
};
