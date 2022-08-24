import SidebarItem from "./SidebarItem";
import items from "../../data/sidebar.json";
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="project__sidebar">
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}