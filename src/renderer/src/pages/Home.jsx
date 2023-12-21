import { useEffect } from "react"
import Tip from "../components/Tip"

export function Home(props) {

  const data = [
    {
      // time: new Date(),
      time: 2012,
      des: 'fasdfgalkdfjgalskdglasd',
    },
    {
      time: 2013,
      des: '然后呢怎样',
    },
    {
      time: 2014,
      des: '不知道呀',
    },
    {
      time: 2012,
      des: '今天干了什么',
    },
    {
      time: 2012,
      des: '今天干了什么',
    },
    {
      time: 2012,
      des: '今天干了什么',
    },
    {
      time: 2012,
      des: '今天干了什么',
    },
    {
      time: 2012,
      des: '今天干了什么',
    }
  ]
  // 初始化
  useEffect(() => { }, [])
  return (
    <>
      <Tip>直接输入记录今日事项;点击按钮或者回车确认</Tip>
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div>
          <textarea rows={3} style={{ width: 500, padding: 8, marginRight: 24 }} />
        </div>
        <button>确认</button>
      </div>

      <br />

      <div>
        {
          data.map((d) => {
            const { time, des } = d
            return <div className="card-item">
              <div>{time}</div>
              <div>{des}</div>
            </div>
          })
        }
      </div>
      <p>新增事项</p>
    </>
  )
}

export default Home
