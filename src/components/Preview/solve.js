import AlgebraLatex from 'algebra-latex'
// import AlgebraJS from 'algebra.js'
import math from 'mathjs'

export const simplify = (latex) => {
  const algebraLatex = new AlgebraLatex(latex)
  return math.simplify(algebraLatex.toMath()).toTex()
}
