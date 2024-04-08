import React, { useEffect, useRef, useState } from 'react';

interface Tab {
    key: string;
    label: string;
}

interface TabProps {
    tabs: Tab[];
    children: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({tabs,children}) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].key);
    const [isSticky,setIsSticky] = useState<boolean>(false);

    const tabRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const tabTop = tabRef.current?.offsetTop;
        
        const onScroll = ()=>{
            console.log(window.scrollY);
            console.log(tabTop);
            if(tabTop){
                if(window.scrollY >= tabTop){
                    setIsSticky(true);
                }else{
                    setIsSticky(false);
                }
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    },[]);

    return (
        <div className='tab-box w-full flex flex-col items-center font-roboto text-sm md:text-base z-10 mt-5'>
            <div ref={tabRef} className={`tabs flex flex-row w-full md:w-[60%] ${isSticky ? "sticky" : ""} shadow-xl border-t border-black divide-x divide-white`}>
                {tabs.map(tab => (
                    <div
                    key={tab.key}
                    className={`tab-button ${activeTab === tab.key ? 'active' : 'inactive'} w-1/4 h-10 flex justify-center items-center hover:cursor-pointer`}
                    onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content w-full flex justify-center md:mb-20">
                {children.filter(child => React.isValidElement(child) && child.props.tabKey === activeTab)}
            </div>
        </div>
    );
}

export default Tabs;