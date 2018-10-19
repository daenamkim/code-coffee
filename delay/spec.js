const { use, expect } = require("chai");
const { install } = require("lolex");
const { spy } = require("sinon");
const sinonChai = require("sinon-chai");
const { delay } = require(".");
use(sinonChai);

describe("delay", () => {
  let timerCallback;
  let clock;

  beforeEach(() => {
    timerCallback = spy();
    clock = install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it("should only execute the function after the specified wait time", () => {
    delay(timerCallback, 100);
    clock.tick(99);

    expect(timerCallback).not.to.have.been.called;

    clock.tick(1);

    expect(timerCallback).to.have.been.called;
  });

  it("should pass function arguments in", () => {
    delay(timerCallback, 100, 1, 2);
    clock.tick(100);

    expect(timerCallback).to.have.been.calledWith(1, 2);
  });
});
