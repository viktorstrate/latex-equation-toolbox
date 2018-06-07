import { Reducer, Action } from "redux";

interface State {
  png: string,
  svg: string
}

const initialState: State = {
  png: '',
  svg: ''
}

const actionTypes = {
  UPDATE_IMAGE: 'image-export@update'
}

interface ChangeImageAction extends Action {
  png: string,
  svg: string
}

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_IMAGE:
      return {
        png: action.png,
        svg: action.svg
      }
    default:
      return state
  }
}

export default reducer

export const actions = {
  updateImage: (png: string, svg: string): ChangeImageAction => ({
    type: actionTypes.UPDATE_IMAGE,
    png,
    svg
  })
}
