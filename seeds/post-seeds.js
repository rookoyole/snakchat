const { Post } = require('../models');

const postdata = [
  {
    title: 'Nongshim Spicy Shrimp Crackers',
    post_url: 'https://www.worldofsnacks.com/store/p310/Nongshim_Spicy_Shrimp_Crackers.html',
    user_id: 1,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p310_i2_w1922.jpeg'
  },
  {
    title: 'Euro Strawberry Cake',
    post_url: 'https://www.worldofsnacks.com/store/p593/Euro_Strawberry_Cake.html',
    user_id: 2,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p593_i5_w522.jpeg'
  },
  {
    title: `Lotte Koala's March Chocolate`,
    post_url: 'https://www.worldofsnacks.com/store/p1012/Lotte_Koalas_March_Chocolate.html.html',
    user_id: 3,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1012_i11_w750.jpeg'
  },
  {
    title: 'Fudgee Bar Mocha',
    post_url: 'https://www.worldofsnacks.com/store/p1110/Fudgee_Barr_Mocha.html',
    user_id: 4,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1110_i5_w465.jpeg'
  },
  {
    title: 'Walkers Beef and Onions Crisps',
    post_url: 'https://www.worldofsnacks.com/store/p868/Walkers_Beef_and_Onion_Crisps.html',
    user_id: 5,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p868_i3_w616.jpeg'
  },
  {
    title: 'Vero Mango Lollipop',
    post_url: 'https://www.worldofsnacks.com/store/p263/Vero_Mango_Lollipop.html',
    user_id: 6,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p263_i1_w1000.jpeg'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
