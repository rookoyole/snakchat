const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Much delicious in your tummy',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Get in ma belle.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: `Eat'em all day, every day.`,
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Whatcha whatcha want, whatcha want.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'Did you say steak????',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: `The way to a man's heart is through his stomach...`,
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: `The way to a woman's heart is also through her stomach.`,
    user_id: 2,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
