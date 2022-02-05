import {FC} from 'react'
import Nav from './components/Nav/Nav'
import Card from './components/Card/index'

const Workspace: FC = () => {
  return (
    <div>
      <Nav/>
      <div>
        <Card title={"code-dragger"} edittime="3 days ago"/>
        <Card title={"untitled"} edittime="3 days ago"/>
        <Card title={"new work"} edittime="3 days ago"/>
        <Card title={"untitled"} edittime="last edit 3 days ago"/>
        <Card title={"untitled"} edittime="5 days ago"/>
        <Card title={"untitled"} edittime="7 days ago"/>
        <Card title={"untitled"} edittime="9 days ago"/>
      </div>
    </div>
  )
}

export default Workspace