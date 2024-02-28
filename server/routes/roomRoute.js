// const express = require("express");
// const router = express.Router();

// const Room = require("../models/room");

// router.get("/getallrooms", async (req, res) => {
//   try {
//     const rooms = await Room.find({});
//     res.send(rooms);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getroombyid", async (req, res) => {
//   try {
//     const roomid = req.body.roomid;
//     const room = await Room.findOne({ _id: roomid });
//     res.send(room);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getallrooms", async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.send(rooms);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/addroom", async (req, res) => {
//   try {
//     const newRoom = req.body;
//     console.log(req.body);
//     const room = new Room();
//     room.name = newRoom.name;
//     room.maxcount = newRoom.maxcount;
//     room.roomnumber = newRoom.roomnumber;
//     room.rentperday = newRoom.rentperday;
//     room.type = newRoom.type;
//     room.description = newRoom.description;
//     room.currentbookings = newRoom.currentbookings;
//     if (newRoom.imageurl1 && newRoom.imageurl1.length > 0) {
//       room.imageurls.push(newRoom.imageurl1);
//     }
//     if (newRoom.imageurl2 && newRoom.imageurl2.length > 0) {
//       room.imageurls.push(newRoom.imageurl2);
//     }
//     if (newRoom.imageurl3 && newRoom.imageurl3.length > 0) {
//       room.imageurls.push(newRoom.imageurl3);
//     }

//     const result = await room.save();
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: error });
//   }
// });



// module.exports = router;


// const express = require("express");
// const router = express.Router();

// const Room = require("../models/room");

// router.get("/getallrooms", async (req, res) => {
//   try {
//     const rooms = await Room.find({});
//     res.send(rooms);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getroombyid", async (req, res) => {
//   try {
//     const roomid = req.body.roomid;
//     const room = await Room.findOne({ _id: roomid });
//     res.send(room);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getallrooms", async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.send(rooms);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: error });
//   }
// });

// // Backend route to handle filtering rooms by price range
// router.get('/filterbyPriceRange', async (req, res) => {
//     try {
//         const { minrentperday, maxrentperday } = req.query;
//         // Perform database query to filter rooms by price range
//         const rooms = await Room.find({ rentperday: { $gte: minrentperday, $lte: maxrentperday } });
//         res.json(rooms);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// router.post("/addroom", async (req, res) => {
//   try {
//     const newRoom = req.body;
//     console.log(req.body);
//     const room = new Room();
//     room.name = newRoom.name;
//     room.maxcount = newRoom.maxcount;
//     room.phonenumber = newRoom.phonenumber;
//     room.rentperday = newRoom.rentperday;
//     room.type = newRoom.type;
//     room.description = newRoom.description;
//     room.currentbookings = newRoom.currentbookings;
//     if (newRoom.imageurl1 && newRoom.imageurl1.length > 0) {
//       room.imageurls.push(newRoom.imageurl1);
//     }
//     if (newRoom.imageurl2 && newRoom.imageurl2.length > 0) {
//       room.imageurls.push(newRoom.imageurl2);
//     }
//     if (newRoom.imageurl3 && newRoom.imageurl3.length > 0) {
//       room.imageurls.push(newRoom.imageurl3);
//     }

//     const result = await room.save();
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: error });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getroombyid", async (req, res) => {
  try {
    const roomid = req.body.roomid;
    const room = await Room.findOne({ _id: roomid });
    res.send(room);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.send(rooms);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

// Quick Sort function to sort rooms by rent per day
function quickSortByRentPerDay(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[arr.length - 1].rentperday;
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].rentperday < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quickSortByRentPerDay(left), arr[arr.length - 1], ...quickSortByRentPerDay(right)];
}

// Binary search function to search rooms by rent per day
function binarySearchByRentPerDay(rooms, minRentPerDay, maxRentPerDay) {
  let left = 0;
  let right = rooms.length - 1;
  let result = [];

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let room = rooms[mid];

      if (room.rentperday >= minRentPerDay && room.rentperday <= maxRentPerDay) {
          result.push(room);
      }

      if (room.rentperday < minRentPerDay) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return result;
}

// Route to fetch sorted rooms by rent per day
router.get("/rooms/sortedByRentPerDay", async (req, res) => {
  try {
      const rooms = await Room.find({}).sort({ rentperday: 1 });
      const sortedRooms =quickSortByRentPerDay(rooms);
      res.json(rooms);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
});

// Route to perform searching on sorted rooms by rent per day
router.get("/rooms/searchByRentPerDay", async (req, res) => {
  try {
      const { minRentPerDay, maxRentPerDay } = req.query;
      const sortedRoomsResponse = await axios.get("http://localhost:4000/api/rooms/sortedByRentPerDay"); // Update URL accordingly
      const rooms = sortedRoomsResponse.data;
      const searchResults = binarySearchByRentPerDay(rooms, minRentPerDay, maxRentPerDay);
      res.json(searchResults);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/addroom", async (req, res) => {
  try {
    const newRoom = req.body;
    console.log(req.body);
    const room = new Room();
    room.name = newRoom.name;
    room.maxcount = newRoom.maxcount;
    room.phonenumber = newRoom.phonenumber;
    room.rentperday = newRoom.rentperday;
    room.type = newRoom.type;
    room.description = newRoom.description;
    room.currentbookings = newRoom.currentbookings;
    if (newRoom.imageurl1 && newRoom.imageurl1.length > 0) {
      room.imageurls.push(newRoom.imageurl1);
    }
    if (newRoom.imageurl2 && newRoom.imageurl2.length > 0) {
      room.imageurls.push(newRoom.imageurl2);
    }
    if (newRoom.imageurl3 && newRoom.imageurl3.length > 0) {
      room.imageurls.push(newRoom.imageurl3);
    }

    const result = await room.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

module.exports = router;




