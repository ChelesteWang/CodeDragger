import React from 'react'
import TabPanel from './component/TabPanelProps/TabPanelProps'
import './Left.css'

export default class Left extends React.Component{
    render(): React.ReactNode {
        return (
            <div className="left">
                <div className="options">
                    <TabPanel/>
                    {/* <ul>
                        <li>
                            <div>Component</div>
                        </li>
                        <li>
                            <div>NodeTrees</div>
                        </li>
                    </ul> */}
                </div>
                
                <div className='component'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}