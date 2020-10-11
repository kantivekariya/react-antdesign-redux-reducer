import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import randToken from 'rand-token';
import appConfig from '../../config/env';


const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  let user = this ;
  if (!user.isModified('password')) return next();
  let hashedpassword = await bcrypt.hash(user.password, 10);
  console.log("2",hashedpassword)
  user.password = hashedpassword;
  next();
});

userSchema.methods.generateJWT = function (remember) {
  return jwt.sign(
    {
      id: this._id,
      name: this.name,
      email: this.email,
      jti: this._id + '_' + randToken.generator({ chars: '0-9' }).generate(6),
    },
    appConfig.jwtSecret,
    {
      expiresIn: remember ? appConfig.jwtDuration : appConfig.jwtDuration,
    },
  );
};

userSchema.methods.matchPasswords = async function (candidatePassword) {
  console.log(this.password)
  let isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

const userModel = mongoose.model('userModel', userSchema, 'users');

export { userModel };
