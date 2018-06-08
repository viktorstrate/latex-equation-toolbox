import { h, Component } from 'preact'
import { connect } from 'react-redux'

import { actions, SettingsState } from '../../reducers/settings'

interface PropsType {
  settings: SettingsState,
  dispatch(action: any)
}

@connect(store => ({
  settings: store.settings
}))
export default class Settings extends Component<PropsType, any> {


  changeTheme = () => {
    this.props.dispatch(actions.changeTheme(!this.props.settings.darkTheme))
  }

  render(props) {
    return (
      <div>
        <h2>Settings view</h2><br/>
        <label for='settings-dark-theme'>
        Dark theme
        </label>
        <input id='settings-dark-theme' type='checkbox' checked={this.props.settings.darkTheme} onChange={this.changeTheme} />
      </div>
    )
  }
}