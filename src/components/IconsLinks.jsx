export default function IconLinks(props){
    return(
        <div className={'iconLinks'}>
            <p>Icons by Icons8</p>
            <ul>
                {props.listLinks.map( (value, index) => {
                    const random = Math.random()

                    return( 
                        <li key={random}>
                            <a target={'blank'} href={value}>{props.listNames[index]}</a> / 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}