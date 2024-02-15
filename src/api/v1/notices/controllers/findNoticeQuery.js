// const Notice = require("../../../../models/Notices");

// const findNoticeQuery = async (req, res) => {
//   try {
//     const filter = req.query;
//     // Ensure filter.search is a valid string
//     const searchQuery = typeof filter.search === "string" ? filter.search : "";

//     const query = {
//       title: {
//         $regex: searchQuery,
//         $options: "i",
//       },
//     };

//     const result = await Notice.find(query);
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// module.exports = findNoticeQuery;
