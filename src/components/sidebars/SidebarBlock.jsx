export default function SidebarBlock(props){
    return(
        <div className={'sidebarBlock'}>
            {props.title !== undefined && <h3 className={'sidebarBlockTitle'}>{props.title}</h3>}
            <ul className={'blockList'}>
                {props.list.map((value, index) => {
                    const rand = Math.random()
                    return (
                        <li key={rand}>
                            <img alt='' src={props.img[index]}/>
                            <p>{value}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}