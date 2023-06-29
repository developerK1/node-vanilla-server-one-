//MODULES
const server = require("./lib/server");

//ENV VARIABLES
const PORT = process.env.Port || 5555;


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
