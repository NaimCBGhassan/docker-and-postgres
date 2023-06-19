import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import "./models/Task.js";

try {
  await sequelize.sync({ force: false });
  await sequelize.authenticate();
  console.log("Connection to projectsdb has been success ss");
} catch (error) {
  console.log(error);
}
app.listen(4000, () => console.log("Server on port 4000"));
