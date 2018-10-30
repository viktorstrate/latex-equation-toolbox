import * as React from 'react'
import { connect } from 'react-redux'

import { actions, SettingsState } from '../../reducers/settings'

interface PropsType {
  settings: SettingsState
  dispatch(action: any)
}

class Settings extends React.Component<PropsType, any> {
  changeTheme = () => {
    this.props.dispatch(actions.changeTheme(!this.props.settings.darkTheme))
  }

  render() {
    return (
      <div>
        <h2>Settings view</h2>
        <br />
        <label htmlFor="settings-dark-theme">Dark theme</label>
        <input
          id="settings-dark-theme"
          type="checkbox"
          checked={this.props.settings.darkTheme}
          onChange={this.changeTheme}
        />
      </div>
    )
  }
}

export default connect(store => ({
  settings: store.settings,
}))(Settings)
