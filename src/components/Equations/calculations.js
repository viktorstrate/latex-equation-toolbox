import AlgebraLatex from 'algebra-latex'
import math from 'mathjs'
import _ from 'lodash'

export const getVariables = (latex) => {
  let parsedMath = new AlgebraLatex(latex)
  parsedMath = parsedMath.toMath()
  try {
    parsedMath = math.parse(parsedMath)
  } catch (e) {
    return []
  }

  let variables = parsedMath.filter(node => {
    return node.isSymbolNode && node.name
  })

  variables = variables.map(vars => vars.name)
  variables = _.uniq(variables) // remove duplicates
  variables = variables.sort()

  console.log(variables)
  return variables
}

export const solve = (latex, variables) => {
  let parsedMath = new AlgebraLatex(latex)
  parsedMath = parsedMath.toMath()
  try {
    parsedMath = math.parse(parsedMath)
  } catch (e) {
    return latex
  }

  console.log('solve result', math.simplify(parsedMath, variables).toTex())

  return math.simplify(parsedMath, variables).toTex()
}
