const moment = require("moment");

const posts = [
  {
    id: 1,
    title: "Judul 1",
    body: "Ini contoh isis",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Judul 2",
    body: "Ini contoh isi",
    createdAt: new Date(),
  },
];
module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        posts: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Post",
    };
    res.render("pages/dashboard/post", locals);
  },
};
