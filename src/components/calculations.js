import AlgebraLatex from 'algebra-latex'
import math from 'mathjs'
import CQ from 'coffeequate'
import uniq from 'lodash/uniq'

export const getVariables = (latex) => {
  latex = latex.replace('=', '+') // Used to parse equations
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
  variables = uniq(variables) // remove duplicates
  variables = variables.sort()

  console.log(variables)
  return variables
}

export const solveVariables = (latex, variables) => {
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

export const solveVariable = (latex, variable) => {
  if (variable === null || variable === '') {
    return latex
  }

  let parsedMath = null

  try {
    parsedMath = new AlgebraLatex(latex)
    parsedMath = parsedMath.toMath()
    parsedMath = CQ(parsedMath)
  } catch (e) {
    return latex
  }

  try {
    return parsedMath.solve(variable).reduce((prev, curr) => {
      if (prev === null) {
        return curr
      } else {
        return prev + '\vee ' + curr
      }
    }, null).toLaTeX()
  } catch (e) {
    return latex
  }
}
