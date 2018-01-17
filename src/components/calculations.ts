import AlgebraLatex from 'algebra-latex'
import CQ from 'coffeequate'

const uniq = require('lodash/uniq')
const math = require('mathjs')

export const getVariables = (latex: string):string[] => {
  latex = latex.replace('=', '+') // Used to parse equations
  let parsedMath = new AlgebraLatex(latex)
  parsedMath = parsedMath.toMath()
  console.log(parsedMath)
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

export const solveVariables = (latex:string, variables:string[]) => {
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

export const solveVariable = (latex:string, variable:string):string => {
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
        return prev + '\\vee ' + curr
      }
    }, null).toLaTeX()
  } catch (e) {
    return latex
  }
}
