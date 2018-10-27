import styled, { createGlobalStyle } from 'styled-components'

export const MathJaxStyle = createGlobalStyle`
  .MathJax_Preview {
    display: none !important;
  }

  .MJXc-display {
    margin: 4px 0 !important;
    user-select: none;
    font-size: 24px !important;
  }
`

export const MathFieldDiv = styled.div`
  min-height: 90px;
`

export const ImageWrapper = styled.div`
  background-color: white;
  display: table;
  margin: auto;
  padding: 8px;
`

export const CenterDiv = styled.div`
  text-align: center;
`

export const Container = styled.div`
  height: 100%;
  overflow: scroll;
`

export const Header = styled.div`
  font-size: 20px;
  padding: 8px;
`
