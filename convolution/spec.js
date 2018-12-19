const chai = require("chai");
const { expect } = chai;
const chaiAlmost = require("chai-almost");
chai.use(chaiAlmost());

const {
  computeGradientMagnitude,
  convolveCenterElement,
  convolveEntireMatrix,
} = require(".");

const {
  horizontalEdgeGradientMagnitude,
  horizontalEdgeGradientX,
  horizontalEdgeGradientY,
  horizontalEdgeSource,
  verticalEdgeGradientMagnitude,
  verticalEdgeGradientX,
  verticalEdgeGradientY,
  verticalEdgeSource,
} = require("./spec.data.js");

const ALL_ZEROES = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const IDENTITY_MATRIX = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
const SOBEL_KERNEL_X = [[1, 0, -1], [2, 0, -2], [1, 0, -1]];
const SOBEL_KERNEL_Y = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];

xdescribe("convolution", () => {
  describe("convolveCenterElement", () => {
    it("should return 0 when all values in the kernel are 0", () => {
      const source = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      const kernel = ALL_ZEROES;

      const actual = convolveCenterElement(source, kernel);

      expect(actual).to.equal(0);
    });

    it("should return 0 when all values in the source are 0", () => {
      const source = ALL_ZEROES;
      const kernel = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

      const actual = convolveCenterElement(source, kernel);

      expect(actual).to.equal(0);
    });

    it("should return the value at the center of the source when the kernel is the identity matrix", () => {
      const source = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      const kernel = IDENTITY_MATRIX;

      for (let i = 0; i < 10; ++i) {
        source[1][1] = i;
        const actual = convolveCenterElement(source, kernel);
        expect(actual).to.equal(i);
      }
    });
  });

  describe("convolveEntireMatrix", () => {
    describe("using SOBEL_KERNEL_X", () => {
      it("should return all 0s if all values in the source are 0", () => {
        const actual = convolveEntireMatrix(ALL_ZEROES, SOBEL_KERNEL_X);
        const expected = ALL_ZEROES;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a vertical edge", () => {
        const actual = convolveEntireMatrix(verticalEdgeSource, SOBEL_KERNEL_X);
        const expected = verticalEdgeGradientX;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a horizontal edge", () => {
        const actual = convolveEntireMatrix(
          horizontalEdgeSource,
          SOBEL_KERNEL_X
        );
        const expected = horizontalEdgeGradientX;
        expect(actual).to.almost.deep.equal(expected);
      });
    });

    describe("using SOBEL_KERNEL_Y", () => {
      it("should return all 0s if all values in the source are 0", () => {
        const actual = convolveEntireMatrix(ALL_ZEROES, SOBEL_KERNEL_Y);
        const expected = ALL_ZEROES;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a vertical edge", () => {
        const actual = convolveEntireMatrix(verticalEdgeSource, SOBEL_KERNEL_Y);
        const expected = verticalEdgeGradientY;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a horizontal edge", () => {
        const actual = convolveEntireMatrix(
          horizontalEdgeSource,
          SOBEL_KERNEL_Y
        );
        const expected = horizontalEdgeGradientY;
        expect(actual).to.almost.deep.equal(expected);
      });
    });

    describe("gradientMagnitude", () => {
      it("should return 0 if all values in the source are 0", () => {
        const { gradientX, gradientY } = getGradients(ALL_ZEROES);
        const actual = computeGradientMagnitude(gradientX, gradientY);
        const expected = ALL_ZEROES;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a vertical edge", () => {
        const { gradientX, gradientY } = getGradients(verticalEdgeSource);
        const actual = computeGradientMagnitude(gradientX, gradientY);
        const expected = verticalEdgeGradientMagnitude;
        expect(actual).to.almost.deep.equal(expected);
      });

      it("should return the correct result if the source image contains a horizontal edge", () => {
        const { gradientX, gradientY } = getGradients(horizontalEdgeSource);
        const actual = computeGradientMagnitude(gradientX, gradientY);
        const expected = horizontalEdgeGradientMagnitude;
        expect(actual).to.almost.deep.equal(expected);
      });
    });
  });

  function getGradients(source) {
    const gradientX = convolveEntireMatrix(source, SOBEL_KERNEL_X);
    const gradientY = convolveEntireMatrix(source, SOBEL_KERNEL_Y);
    return { gradientX, gradientY };
  }
});
