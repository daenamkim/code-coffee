const { expect } = require("chai");
const { BigNumber } = require("bignumber.js");
const { fib } = require(".");

// We rarely make use of this, but when you define chais callbacks as a normal function
// "this" will be bound by chai to a context object you can set settings on, pretty neat.
/* eslint-disable prefer-arrow-callback */
describe.only("Fibonacci", function() {
  it("should be a bignumber", () => {
    expect(BigNumber.isBigNumber(fib(1))).to.be.true;
  });
  it("should return basic n-th numbers", () => {
    // 1st => 1: 1
    // 2nd => 1: 1 1
    // 3rd => 2: 1 2 1
    // 4th => 3: 1 3 3 1
    // 5th => 5: 1 2 3 2 1
    expect(fib(1)).to.be.eql(new BigNumber(1));
    expect(fib(2)).to.be.eql(new BigNumber(1));
    expect(fib(3)).to.be.eql(new BigNumber(2));
    expect(fib(4)).to.be.eql(new BigNumber(3));
    expect(fib(5)).to.be.eql(new BigNumber(5));
    expect(fib(11)).to.be.eql(new BigNumber(89));
  });
  it("Calculates the 8181st Fibonacci number fast enough", function() {
    // WARNING: timeout doesn't work at all for recursion!
    this.timeout(100);
    const expected = new BigNumber(
      "239001090710360059034248200673803309562195124933438825088385870209105768309267224930066773271004303009695857056812050426322722227488483596969330539198412751609689113829755775066752844437629935556689908621747058520170917953833076673228939285877150494526386620300621280749499924952199516712960736433814553231958282333619656314497995824452475174641352224677997408976231194557854106641619031011172157654286916061043356523159334857136487352779804235483277506977454306460042287968212874761824582897118739286429568840003151050106146828835563160817912048376040050029809912293013734791567749471727392937824065261113177259783202662957881148637632338195187490758787735996699022778723575367214258563034452504094360966531897568256418608645465915444745840473934322871426418866598642747848660145342643755366760919516317387477526541252807114293921792114970905075434450564838742451198888345673434700068960962172644679947794329807611771708249033661865248799511661306285140477533559743999464574932871122125066107105911374614630965320293086278694399936369060752395531165804412176996135810584035128447884802662630006754418904791563798389799016017336123177492245220148295507234160487497059285034564989541608419857951981398972834439558266427410836592525389894745439937417033358839088886819050208294080514041113275997534122520735761635971975621605403703050984275628628811283403426936742851082726036123336764016240562071825096262121405587203818756266733130406345518134166312225673215071500009165695469591411166981267241101113735558997083171850461315680070428706983814819412637005375477590183910679020180492817106735246177201410250973608332090435177967936901320342366183865669056306257798108871942566285065496557591483743343454453933506"
    );

    const result = new BigNumber(fib(8181));
    expect(result.comparedTo(expected)).to.be.eql(0);
  });
});
