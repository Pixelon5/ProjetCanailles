const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Utilisateur = require('../models/Utilisateur');

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function authenticate({ pseudo, motdepasse }) {
  const user = await Utilisateur.findOne({ pseudo });
  if (user && bcrypt.compareSync(motdepasse, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function getAll() {
  return await Utilisateur.find().select('-hash');
}

async function getById(id) {
  return await Utilisateur.findById(id).select('-hash');
}

async function create(userParam) {
  // validate
  if (await Utilisateur.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new Utilisateur(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}

async function update(id, userParam) {
  const user = await Utilisateur.findById(id);

  // validate
  if (!user) throw 'User not found';
  if (user.username !== userParam.username && await Utilisateur.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function _delete(id) {
  await Utilisateur.findByIdAndRemove(id);
}
