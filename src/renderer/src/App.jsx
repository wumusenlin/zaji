import Versions from './components/Versions'
import BasicLayout from './pages/layout/BasicLayout'
import { navbarInfo } from './utils/global'
import { useState } from 'react'


function App() {
  const [router, setRouter] = useState('home')


  return <div id="main">
    <div id="navbar">
      {
        navbarInfo.map((nav) => {
          const { name, path, icon } = nav
          const className = `nav-item ${path === router ? 'nav-item-active' : ''}`
          return <div
            onClick={(e) => setRouter(path)}
            className={className}
          >
            <div className='nav-item-icon'>{icon}</div>
            <p className='nav-item-text'>{name}</p>
          </div>
        })
      }
    </div>
    <div id="container">
      <header id="header">
        <div>💌💌💌</div>
        <div>
          <button>新增</button>
        </div>
      </header>
      <BasicLayout router={router} />
    </div>
  </div>
}

export default App
