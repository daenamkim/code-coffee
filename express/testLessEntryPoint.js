/**
 * You can use this file to start your server outside of the test environment via
 *    node express/testLessEntryPoint.js
 */

const { setupExpressServer } = require("./index");

const PORT = process.env.PORT || 3000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
