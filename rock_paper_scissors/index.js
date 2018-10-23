/*
   * Write a function that generates every sequence of throws a single
   * player could throw over a three-round game of rock-paper-scissors.
   *
   * Your output should look something like:
   *   [["rock", "rock", "rock"],
   *    ["rock", "rock", "paper"],
   *    ["rock", "rock", "scissors"],
   *    ["rock", "paper", "rock"],
   *    ...etc...
   *   ]
   *
   * After you finish it, change it in order to return answers for any number of rounds.
   * Example:
   *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
   */
const rockPaperScissors = (maxRound = 3) => {
  const results = [];
  const options = ["rock", "paper", "scissors"];
  function play(result, round) {
    if (round < 1) {
      results.push(result);
    } else {
      options.forEach((option) => {
        const newResult = result.slice();
        newResult.push(option);
        play(newResult, round - 1);
      });
    }
  }
  play([], maxRound);
  return results;
};

module.exports = { rockPaperScissors };
