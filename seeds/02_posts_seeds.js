/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('posts').insert([
    { description: `New desk, can't find space for this but its brand new!`, image: 'https://www.ikea.com/us/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=s', title: 'New Desk, need it out my house ASAP!', user_id: 1, location: 'Queens', category: 'Household', quantity: 1, weight: 30, length: 40, width: 70, height: 50 },
    { description: `This chair is in mid condition, its at my mother in law's place`, image: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202209/1448/lorraine-tufted-chair-c.jpg', title: 'Mid condition chair', user_id: 1, location: 'Brooklyn', category: 'Household', quantity: 1, weight: 50, length: 40, width: 70, height: 70 },
    { description: `Rode it for a week, skateboarding is not my thing lol`, image: 'https://m.media-amazon.com/images/I/61Z+qalFRqL._AC_SX679_.jpg', title: 'Barely used Skateboard', user_id: 3, location: 'Bronx', category: 'Sporting', quantity: 1, weight: 15, length: 50, width: 20, height: 15 },
    { description: `Not working anymore, maybe some screen issues, anyone interested?`, image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/66166606/5da37d37760a3c9c33b6b3cc8790e115.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&rot=-270&s=3ca5168d22bd9da059ba174831258b64', title: 'Ipod', user_id: 2, location: 'Bronx', category: 'Tech', quantity: 1, weight: 3, length: 10, width: 8 },
    { description: `A few great reads, anyone interested in them?`, image: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg', title: 'Some Books!', user_id: 2, location: 'Staten Island', category: 'Household', quantity: 5, weight: 20 },
    { description: `Had this shirt for a while now, never got a chance to wear it - too big. Size: XL`, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpJemVTpWYmAvWQVILT0BJ1bKY_1Viy631w&usqp=CAU', title: 'Button down shirt', user_id: 1, location: 'Queens', category: 'Clothing', quantity: 1, weight: 1, length: 80, width: 80},
    { description: `Lost my receipt for this thing, anyone want to take it off my hands?`, image: 'https://cdn.shopify.com/s/files/1/0291/6427/3757/products/57001_Blender_2000x2000_442ab931-586e-4bad-8954-f8781dbabcb0_1949x.jpg?v=1637279861', title: 'Blender, used twice', user_id: 3, location: 'Manhattan', category: 'Household', quantity: 1, weight: 10, height: 50 },
    { description: `Lost the second one, anyone interested in just one speaker? Sounds slightly muffled`, image: 'https://m.media-amazon.com/images/I/51KZcUQIyiS._AC_SL1080_.jpg', title: '1 Speaker', user_id: 3, location: 'Manhattan', category: 'Tech', quantity: 1, weight: 10, length: 20, width: 40, height: 50 },
    { description: `Anyone want this scribble board game? I've used it like 5 times - got too boring for me`, image: 'https://assets-prd.ignimgs.com/2022/05/12/classic-board-games-1652389030946.png?width=1280', title: 'Scribble board game', user_id: 2, location: 'Brooklyn', category: 'Gaming', quantity: 1, weight: 30, length: 40, width: 70, height: 50 },
  ]);
};
