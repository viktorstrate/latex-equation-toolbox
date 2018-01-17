declare namespace mathjs {
  export interface IMathJsStatic {
    simplify(expr: string|MathNode, rules?: any): MathNode
    simplify(expr: string|MathNode, rules?: any, scope?: any): MathNode
    simplify(expr: string|MathNode, scope?: any): MathNode
  }

  export interface CustomizeOutputSettings {
    parenthesis?: 'keep'|'auto'|'all',
    handler?: any,
    implicit?: 'hide'|'show'
  }

  export interface MathNode {
    toTex(settings?: CustomizeOutputSettings): string
    toString(settings?: CustomizeOutputSettings): string
    toHTML(settings?: CustomizeOutputSettings): string
  }
}