const { Post } = require('../models');

const postdata = [
  {
    title: 'Nongshim Spicy Shrimp Crackers',
    post_url: 'https://www.worldofsnacks.com/store/p310/Nongshim_Spicy_Shrimp_Crackers.html',
    user_id: 1
  },
  {
    title: 'Euro Strawberry Cake',
    post_url: 'https://www.worldofsnacks.com/store/p593/Euro_Strawberry_Cake.html',
    user_id: 2
  },
  {
    title: `Lotte Koala's March Chocolate`,
    post_url: 'https://www.worldofsnacks.com/store/p1012/Lotte_Koalas_March_Chocolate.html.html',
    user_id: 3
  },
  {
    title: 'Fudgee Bar Mocha',
    post_url: 'https://www.worldofsnacks.com/store/p1110/Fudgee_Barr_Mocha.html',
    user_id: 4
  },
  {
    title: 'Walkers Beef and Onions Crisps',
    post_url: 'https://www.worldofsnacks.com/store/p868/Walkers_Beef_and_Onion_Crisps.html',
    user_id: 5
  },
  {
    title: 'Vero Mango Lollipop',
    post_url: 'https://www.worldofsnacks.com/store/p263/Vero_Mango_Lollipop.html',
    user_id: 6
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
