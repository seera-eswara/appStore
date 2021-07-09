// Write your code here

import {Component} from 'react'
import './index.css'

class TabITem extends Component {
  selectedTab = () => {
    const {tabId, activeTab} = this.props
    activeTab(tabId)
  }

  render() {
    const {tabText, isActive} = this.props

    const tabBtnClassName = isActive ? 'btnStyle active' : 'btnStyle'

    return (
      <li className="liStyle">
        <button
          onClick={this.selectedTab}
          className={tabBtnClassName}
          type="button"
        >
          {tabText}
        </button>
      </li>
    )
  }
}

export default TabITem
