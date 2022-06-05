const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://www.bhg.com/recipe/pumpkin-nut-upside-down-cake/',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://www.bhg.com/recipe/old-fashioned-mini-bundt-cakes/',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://www.bhg.com/recipe/pumpkin-tiramisu-layer-cake/',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: 'https://www.bhg.com/recipe/sausage-gravy-breakfast-pizza/',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'https://www.bhg.com/recipe/slow-cooker-sausage-and-chicken-cassoulet/',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://www.bhg.com/recipe/slow-cooker-sausage-and-chicken-cassoulet/',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
