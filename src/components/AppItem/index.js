import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="appHolder">
      <img className="imgStyle" alt={appName} src={imageUrl} />
      <p className="app-name">{appItem.appName}</p>
    </li>
  )
}

export default AppItem
