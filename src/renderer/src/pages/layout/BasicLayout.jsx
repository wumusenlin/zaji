
import Home from '../Home'
import File from '../File'
import Setting from '../Setting'
import Versions from '../../components/Versions'

function BasicLayout(props) {
  const { router } = props
  const components = {
    home: <Home />,
    file: <File />,
    setting: <Setting />,
    version: <Versions />,
  }
  return (
    <div id="main-container">
      {components[router]}
    </div>
  )
}

export default BasicLayout
