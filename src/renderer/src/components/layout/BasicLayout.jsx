
import Home from '../pages/Home'
import File from '../pages/File'
import Setting from '../pages/Setting'

function BasicLayout(props) {
  const { router } = props
  const components = {
    home: <Home />,
    file: <File />,
    setting: <Setting />,
  }
  return (
    <div>
      {components[router]}
    </div>
  )
}

export default BasicLayout
