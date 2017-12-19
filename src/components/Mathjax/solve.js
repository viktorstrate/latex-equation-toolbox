import AlgebraLatex from 'algebra-latex'
import AlgebraJS from 'algebra.js'

export const simplify = (latex) => {
  const algebraLatex = new AlgebraLatex(latex)
  return algebraLatex.toAlgebra(AlgebraJS).toTex()
}
