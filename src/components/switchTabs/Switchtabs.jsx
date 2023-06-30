/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Switchtabs.scss';

const Switchtabs = ({ data, onTabchange }) => {
    const [selectedTab, setSelectedtab] = useState(0);
    const [left, setleft] = useState(0);

    const activeTab = (tab, index) => {
        setleft(index * 100)
        setTimeout(() => {
            setSelectedtab(index)
        }, 300);
        onTabchange(tab, index)
    }
    return (
        <>

            <div className='switchingTabs'>
                <div className="tabItems">
                    {data.map((tab, index) => (
                        <span
                            key={index}
                            className={`tabItem ${selectedTab === index ? "active" : ""}`}
                            onClick={() => activeTab(tab, index)}
                        >
                            {tab}
                        </span>
                    ))}
                    <span className='movingBg' style={{ left }} />
                </div>
            </div>







        </>
    )
}

export default Switchtabs