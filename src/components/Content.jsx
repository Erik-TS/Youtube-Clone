import Video from './Video'

export default function Content(props){
    return(
        <div className={'content'}>
            <div className={'contentGrid'}>
                <div className={'row'}>
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                </div>
                <div className={'row'}>
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                </div>
                <div className={'row'}>
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                    <Video views={'000 mi visualizações'} title={'Video title'} channel={'Video channel'} />
                </div>
            </div>
        </div>
    )
}