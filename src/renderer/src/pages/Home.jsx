import { useEffect } from "react"
import Tip from "../components/Tip"
// import fs from 'fs';
// import path from 'path';
// import { app } from 'electron';




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

  const onOk = () => {

    console.log('fasdfasdf',)
    // 获取应用数据目录
    // const userDataPath = app.getPath('userData');
    // console.log('userDataPath', userDataPath)
    // // 创建存放JSON文件的子目录
    // const jsonFolderPath = path.join(userDataPath, 'json_data');
    // if (!fs.existsSync(jsonFolderPath)) {
    //   fs.mkdirSync(jsonFolderPath);
    // }

    // // 写入数据到JSON文件
    // function writeDataToFile(filename, data) {
    //   const filePath = path.join(jsonFolderPath, `${filename}.json`);
    //   fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    // }

    // // 示例：写入数据到特定的JSON文件
    // const currentDate = '2024-02-19';
    // const newActivities = ["学习", "打游戏"];
    // writeDataToFile(currentDate, newActivities);
  }
  return (
    <>
      <Tip>直接输入记录今日事项;点击按钮或者回车确认</Tip>
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div>
          <textarea rows={3} style={{ width: 500, padding: 8, marginRight: 24 }} />
        </div>
        <button onClick={onOk}>确认</button>
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
