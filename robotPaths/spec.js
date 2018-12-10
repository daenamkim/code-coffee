const { RobotPaths } = require("./index");
const { expect } = require("chai");

describe.only("robot paths", () => {
  it("should return a number", () => {
    const path = new RobotPaths(3);
    expect(path).not.to.be.undefined;
    expect(path.solve).to.be.a("function");
    const result = path.solve();
    expect(result).to.be.a("number");
  });

  it("should return a number", () => {
    const path = new RobotPaths(2);
    expect(path).not.to.be.undefined;
    expect(path.solve).to.be.a("function");
    const result = path.solve();
    expect(result).to.be.eql(2);
  });
});
