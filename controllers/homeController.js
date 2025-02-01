exports.index = (req, res) => {
   return res.render("layout.ejs", { title: "Home Page" }); // Ensure "title" is passed
};

exports.skills=(req, res) => {
   res.render('skills');
 };