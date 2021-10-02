import Sidebar from "../Sidebar";


export default function Layout(props) {
    console.log(props);
    return (
        <div className="flex flex-row h-full">
            <Sidebar/>
            {props.children}
        </div>

    )
}