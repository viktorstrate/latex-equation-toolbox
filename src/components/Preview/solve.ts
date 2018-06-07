import AlgebraLatex from 'algebra-latex'
// import AlgebraJS from 'algebra.js'

import * as mathjs from 'mathjs'

export const simplify = (latex: string) => {
  const algebraLatex = new AlgebraLatex(latex)
  return mathjs.simplify(algebraLatex.toMath()).toTex()
}
