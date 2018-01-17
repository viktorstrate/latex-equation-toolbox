import AlgebraLatex from 'algebra-latex'
// import AlgebraJS from 'algebra.js'

import * as math from 'mathjs'


declare namespace mathjs {
  interface IMathJsStatic {
    simplify: string
  }
}


export const simplify = (latex: string) => {
  const algebraLatex = new AlgebraLatex(latex)
  return math.simplify(algebraLatex.toMath()).toTex()
}
