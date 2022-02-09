import { FC, ReactElement } from "react";
import './index.css';

export interface MatrialProps {
  desc?: string,
  dragganble: FC<any>
}

export default function Matrial ({ desc = '组件', dragganble }: MatrialProps): ReactElement {
  return (
    <div className="material-wrapper">
      {dragganble}
      <p>{desc}</p>
    </div>
  )
}