export default function MinSideBarBlock(props){
    return(
        <div>
            <img src={props.img} alt={''} />
            <p>{props.name}</p>
        </div>
    )
}