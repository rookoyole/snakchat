const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'tigerblood',
    email: 'tigers0@catrescue.com',
    password: 'password123'
  },
  {
    username: 'bootcamper',
    email: 'nerds@rock.com',
    password: 'password123'
  },
  {
    username: 'fullstacker',
    email: 'webdev@funtimes.com',
    password: 'password123'
  },
  {
    username: 'smartypants',
    email: 'icancode@amazingly.jp',
    password: 'password123'
  },
  {
    username: 'tutors',
    email: 'helpyhelpers@helperman.com',
    password: 'password123'
  },
  {
    username: 'coding',
    email: 'wearesmart@rockit.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
