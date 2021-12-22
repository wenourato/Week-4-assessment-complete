const express = require("express");
const cors = require("cors");
const ctrl = require('./controller.js')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  console.log("is this working")
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  console.log(randomIndex)

  res.status(200).send(randomCompliment);
});




app.get("/api/fortune", (req, res) => {
  const fortunes = ["Happiness begins with facing life with a smile and a wink.", "Imagination rules the world.", "It is better to deal with problems before they arise.", "Say hello to others. You will have a happier day.", "Success is going from failure to failure without loss of enthusiasm."
];

let randomFortune = Math.floor(Math.random() * fortunes.length);

let newFortune = fortunes[randomFortune]



res.status(200).send(newFortune);

})

// const motivation = [
//     "Keep on keepin on man!",
//      "Lifes a garden, Dig it!", "Roo doo, doo, doo, doo!"
// ];

// app.get("/api/motivation", (req, res) => {
//   res.status(200).send(newMotivation);
  
//   })
  
// let randomMotivation = Math.floor(Math.random() * motivation.length);
// let newMotivation = motivation[randomMotivation]


app.get('/api/motivation', ctrl.getMotivation)
app.post('/api/motivationList', ctrl.createMotivation)
app.delete('/api/motivationList', ctrl.deleteMotivation)



app.listen(4000, () => console.log("Server running on 4000"));
