// import AlgebraLatex from 'algebra-latex'
const AlgebraLatex = require('algebra-latex')
import CQ from 'coffeequate'

const uniq = require('lodash/uniq')
const math = require('mathjs')

export const getVariables = (latex: string): string[] => {
  if (!latex) {
    return []
  }

  let parsedMath

  try {
    latex = latex.replace('=', '+') // Used to parse equations
    parsedMath = new AlgebraLatex().parseLatex(latex)
    parsedMath = parsedMath.toMath()
    console.log(parsedMath)

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

export const solveVariables = (latex: string, variables: string[]) => {
  let parsedMath = new AlgebraLatex().parseLatex(latex)
  parsedMath = parsedMath.toMath()
  try {
    parsedMath = math.parse(parsedMath)
  } catch (e) {
    return latex
  }

  console.log('solve result', math.simplify(parsedMath, variables).toTex())

  return math.simplify(parsedMath, variables).toTex()
}

export const solveVariable = (latex: string, variable: string): string => {
  if (variable === null || variable === '') {
    return latex
  }

  let parsedMath = null

  try {
    parsedMath = new AlgebraLatex().parseLatex(latex).toCoffeequate(CQ)
    console.log('parsedMath', parsedMath)
  } catch (e) {
    console.log('Could not parse for solve variable:', e)
    return latex
  }

  try {
    const solved = parsedMath.solve(variable)
    console.log('solved', solved)

    return solved.reduce((prev, curr) => {
      if (prev === null) {
        return variable + ' = ' + curr.toLaTeX()
      } else {
        return prev + '\\vee ' + variable + ' = ' + curr.toLaTeX()
      }
    }, null)
  } catch (e) {
    console.log('Could not solve variable:', e)
    return latex
  }
}
