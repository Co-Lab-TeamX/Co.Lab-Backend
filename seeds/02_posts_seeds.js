/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('posts').insert([
    { description: 'new desk', image: 'https://www.ikea.com/us/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=s', title: 'desk', user_id: 1 },
    { description: 'new chair', image: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202209/1448/lorraine-tufted-chair-c.jpg', title: 'chair', user_id: 1 },
    { description: 'new skateboard', image: 'https://m.media-amazon.com/images/I/61Z+qalFRqL._AC_SX679_.jpg', title: 'skateboard', user_id: 1 },
  ]);
};
