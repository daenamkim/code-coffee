const horizontalEdgeGradientMagnitude = [
  [0, 0, 0, 0, 0],
  [31.622776601683793, 40, 40, 40, 31.622776601683793],
  [42.42640687119285, 40, 40, 40, 42.42640687119285],
  [40, 0, 0, 0, 40],
  [42.42640687119285, 40, 40, 40, 42.42640687119285],
];

const horizontalEdgeGradientX = [
  [0, 0, 0, 0, 0],
  [10, 0, 0, 0, -10],
  [30, 0, 0, 0, -30],
  [40, 0, 0, 0, -40],
  [30, 0, 0, 0, -30],
];

const horizontalEdgeGradientY = [
  [0, 0, 0, 0, 0],
  [-30, -40, -40, -40, -30],
  [-30, -40, -40, -40, -30],
  [0, 0, 0, 0, 0],
  [30, 40, 40, 40, 30],
];

const horizontalEdgeSource = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10],
];

const verticalEdgeGradientMagnitude = [
  [0, 31.622776601683793, 42.42640687119285, 40, 42.42640687119285],
  [0, 40, 40, 0, 40],
  [0, 40, 40, 0, 40],
  [0, 40, 40, 0, 40],
  [0, 31.622776601683793, 42.42640687119285, 40, 42.42640687119285],
];

const verticalEdgeGradientX = [
  [0, 30, 30, 0, -30],
  [0, 40, 40, 0, -40],
  [0, 40, 40, 0, -40],
  [0, 40, 40, 0, -40],
  [0, 30, 30, 0, -30],
];

const verticalEdgeGradientY = [
  [0, -10, -30, -40, -30],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 10, 30, 40, 30],
];

const verticalEdgeSource = [
  [0, 0, 10, 10, 10],
  [0, 0, 10, 10, 10],
  [0, 0, 10, 10, 10],
  [0, 0, 10, 10, 10],
  [0, 0, 10, 10, 10],
];

module.exports = {
  horizontalEdgeGradientMagnitude,
  horizontalEdgeGradientX,
  horizontalEdgeGradientY,
  horizontalEdgeSource,
  verticalEdgeGradientMagnitude,
  verticalEdgeGradientX,
  verticalEdgeGradientY,
  verticalEdgeSource,
};
