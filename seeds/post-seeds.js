const { Post } = require('../models');

const postdata = [
  {
    title: 'Nongshim Spicy Shrimp Crackers',
    post_url: 'https://www.worldofsnacks.com/store/p310/Nongshim_Spicy_Shrimp_Crackers.html',
    user_id: 1,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p310_i2_w1922.jpeg',
    category: "Chips",
    post_description: "Ok... These are the SPICIEST shrimp crackers I've ever tried. If you guys are into a little bit of heat you absolutely have to give these spicy shrimp crackers a shot! I found these at a local 7-11 but I'm sure most gas stations in the area will have them!"
  },
  {
    title: 'Euro Strawberry Cake',
    post_url: 'https://www.worldofsnacks.com/store/p593/Euro_Strawberry_Cake.html',
    user_id: 2,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p593_i5_w522.jpeg',
    category: "iceCream",
    post_description: "This is easily the best strawberry cake I've ever tried. I mean come on. You just cant get a better snack. Try these for yourself and let me know if you agree! If you don't we cant be friends im sorry i dont make the rules"
  },
  {
    title: `Lotte Koala's March Chocolate`,
    post_url: 'https://www.worldofsnacks.com/store/p1012/Lotte_Koalas_March_Chocolate.html.html',
    user_id: 3,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1012_i11_w750.jpeg',
    category: "candy",
    post_description: "never buying these again, YUCK!!!"
  },
  {
    title: 'Fudgee Bar Mocha',
    post_url: 'https://www.worldofsnacks.com/store/p1110/Fudgee_Barr_Mocha.html',
    user_id: 4,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1110_i5_w465.jpeg',
    category: "candy",
    post_description: "URGENT!!!!! I need help finding where I can purchase these epic fudgee bars. If you've never tried them, they will change your life. I got some a month ago through Amazon but I want to know a local store that sells them. PLEASE HELP!!!"
  },
  {
    title: 'Walkers Beef and Onions Crisps',
    post_url: 'https://www.worldofsnacks.com/store/p868/Walkers_Beef_and_Onion_Crisps.html',
    user_id: 5,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p868_i3_w616.jpeg',
    category: "chips",
    post_description: "I really expected these to suck complete ass but im ngl they do be hittin the spot 0_0"
  },
  {
    title: 'Vero Mango Lollipop',
    post_url: 'https://www.worldofsnacks.com/store/p263/Vero_Mango_Lollipop.html',
    user_id: 6,
    post_img: 'https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p263_i1_w1000.jpeg',
    category: "candy",
    post_description: "Mango lollipop it tastes like mango and its a lollipop like what more could you ask for its so tasty you can get them at any lollipop market in town."
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
