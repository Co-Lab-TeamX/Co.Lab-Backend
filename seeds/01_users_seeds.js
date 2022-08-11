/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').insert([
    { username: 'Joe', password: '123', email: 'j@gmail.com', profile_pic: "https://resources.owllabs.com/hubfs/Blog%20Images/Stock/Remote/Remote-2793651_1152px.jpg" },
    { username: 'April', password: '456', email: 'april@gmail.com', profile_pic: "https://media.istockphoto.com/photos/mature-woman-on-a-video-call-on-the-laptop-at-home-webcam-point-of-picture-id1345980073?b=1&k=20&m=1345980073&s=170667a&w=0&h=jmpeu7GqFqHG2YFwo1H8Ada_iHY7kwWqIzZdYMg0zHo=" },
    { username: 'Mark', password: '456', email: 'Mark@gmail.com', profile_pic: "https://miro.medium.com/focal/1200/1200/64/18/1*wSFGoK4fBCe9MaZn5Kw1nQ.jpeg"},
    { username: 'Kyra', password: '456', email: 'kyra@gmail.com', profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8lSMJhXWBMP274vrmdIRB8fG7yxGFspdjdBN4Su3AiFcuSsEzbacWFDmtzwno3g6P5s&usqp=CAU"},
  ]);
};
