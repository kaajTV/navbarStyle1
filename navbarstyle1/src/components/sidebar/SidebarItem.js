import { useState } from "react";

export default function SidebarItem({item}){
    const [toggleMenu, setToggleMenu] = useState(false)

    
    if(item.childrens){
        return (
            <div className={toggleMenu ? "project__sidebar-item open" : "project__sidebar-item"}>
                <div className="project__sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setToggleMenu(!toggleMenu)}></i>
                </div>
                <div className="project__sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="project__sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}