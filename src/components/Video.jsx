export default function Video(props){
    return(
        <div className={'video'}>
            <div className={'thumbnail'}>
            </div>
            <div className={'videoInfos'}>
                <h3>{props.title}</h3>
                <p>{props.channel}</p>
                <p>{props.views}</p>
            </div>
        </div>
    )
}