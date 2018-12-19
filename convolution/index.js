/**
 * Convolution is a process that is used for signal processing,
 * e.g. image processing and image recognition.
 *
 * Your mission is to implement the following functions:
 *   convolveCenterElement
 *   convolveEntireMatrix
 *   computeGradientMagnitude
 */

/**
 * Returns the value at the CENTER of the given source matrix,
 * after applying convolution with the given kernel matrix.
 *
 * The returned value corresponds to the "output image pixel" in the example at
 * https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution.
 *
 * For this exercise, edges should be handled with zero-padding,
 * as in the examples on slide 52 at
 * https://www.cs.auckland.ac.nz/courses/compsci373s1c/PatricesLectures/Edge%20detection-Sobel_2up.pdf.
 * In other words, if an element in the given source matrix is undefined,
 * it should be processed as if the value were 0.
 *
 * @param {[[Number]]} source
 * @param {[[Number]]} kernel
 * @returns {Number}
 */
function convolveCenterElement(source, kernel) {
  const KERNEL_ROW = kernel.length - 1;
  const KERNEL_COL = kernel[0].length - 1;
  let result = 0;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      result += source[i][j] * kernel[KERNEL_ROW - i][KERNEL_COL - j]
    }
  }

  return result;
}

/**
 * Returns the result of applying convolution with the given kernel matrix
 * to all elements in the given source matrix.
 *
 * @param {[[Number]]} source
 * @param {[[Number]]} kernel
 * @returns {[[Number]]}
 */
function convolveEntireMatrix(source, kernel) {
  const KERNEL_ROW = kernel.length;
  const KERNEL_COL = kernel[0].length;

  // create a specific source matrix based on location
  // send matrix and kerner
  // get every point and set to an array.
  // return

  const gx = [];
  for (let i = 0; i < source.length; i++) {
    const gxRow = [];
    for (let j = 0; j < source[0].length; j++) {
      const newSource = [];
      for (let k = Math.ceil(KERNEL_ROW / 2 * -1); k <= Math.floor(KERNEL_ROW / 2); k++) {
        const newRow = [];
        for (let l = Math.ceil(KERNEL_COL / 2 * -1); l <= Math.floor(KERNEL_COL / 2); l++) {
          if (!source[i + k] || !source[i + k][j + l]) {
            newRow.push(0);
          } else {
            newRow.push(source[i + k][j + l]);
          }
        }
        newSource.push(newRow);
      }
      gxRow.push(convolveCenterElement(newSource, kernel));
    }
    gx.push(gxRow);
  }
  return gx;
}

/**
 * Returns a matrix of gradient magnitudes from the given gradientApproximations.
 *
 * Gradient magnitude is defined at
 * https://en.wikipedia.org/wiki/Sobel_operator#Formulation
 * and on slide 47 at
 * https://www.cs.auckland.ac.nz/courses/compsci373s1c/PatricesLectures/Edge%20detection-Sobel_2up.pdf
 *
 * @param  {...[[Number]]} gradientApproximations
 * @returns {[[Number]]}
 */
function computeGradientMagnitude(...gradientApproximations) {}

module.exports = {
  computeGradientMagnitude,
  convolveCenterElement,
  convolveEntireMatrix,
};
