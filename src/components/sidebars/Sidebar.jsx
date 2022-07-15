import SidebarBlock from './SidebarBlock.jsx'
import {useEffect} from 'react'

export default function Sidebar(props){

    const firstBlock = ['Início', 'Explorar', 'Shorts', 'Inscrições']
    const secondBlock = ['Biblioteca', 'Histórico', 'Seus vídeos', 'Assistir mais tarde', 'Vídeos marcados como gostei', 'Mostrar mais']
    const thirdBlock = ['Canal1', 'Canal2', 'Canal3']
    const fourthBlock = ['YouTube Premium', 'Filmes', 'Jogos', 'Ao vivo', 'Aprender', 'Esportes']
    const fifthBlock = ['Configurações', 'Histórico de denúncias', 'Ajuda', 'Enviar feedback']

    const firstBlockImg = [
        'https://img.icons8.com/material-outlined/24/ffffff/dog-house.png',
        "https://img.icons8.com/material-outlined/24/ffffff/compass.png",
        "https://img.icons8.com/material-outlined/24/ffffff/video-playlist.png",
        "https://img.icons8.com/material-outlined/24/ffffff/video-playlist.png",
    ]
    
    const secondBlockImg = [
        "https://img.icons8.com/external-dashed-line-kawalan-studio/24/ffffff/external-collection-social-media-dashed-line-kawalan-studio.png",
        "https://img.icons8.com/ios/50/ffffff/time-machine.png",
        "https://img.icons8.com/windows/32/ffffff/play-album.png",
        "https://img.icons8.com/material-outlined/24/ffffff/clock--v1.png",
        "https://img.icons8.com/external-those-icons-lineal-those-icons/24/ffffff/external-like-touch-gestures-those-icons-lineal-those-icons.png",
        "https://img.icons8.com/ios/50/ffffff/expand-arrow--v1.png"
    ]

    const thirdBlockImg = [
        ''
    ]

    const fourthBlockImg = [
        "https://img.icons8.com/fluency-systems-regular/48/ffffff/trophy.png",
        "https://img.icons8.com/fluency-systems-regular/48/ffffff/movie.png",
        "https://img.icons8.com/external-regular-kawalan-studio/24/ffffff/external-youtube-gaming-social-media-regular-kawalan-studio.png",
        "https://img.icons8.com/material-outlined/24/ffffff/youtube-live.png",
        "https://img.icons8.com/ios/50/ffffff/light-on--v1.png",
        "https://img.icons8.com/fluency-systems-regular/48/ffffff/trophy.png"
    ]

    const fifthBlockImg = [
        "https://img.icons8.com/material-outlined/24/ffffff/settings--v1.png",
        "https://img.icons8.com/material-outlined/24/ffffff/flag.png",
        "https://img.icons8.com/material-outlined/24/ffffff/help.png",
        "https://img.icons8.com/material-outlined/24/ffffff/about.png"
    ]

    useEffect(() => {
        document.querySelector('.sidebar').hidden = false
    })

    return(
        <div className='sidebar sidebar-style'>
            <div className={'sidebarTop'}>
                <img onClick={() => {
                    const sidebarHidden = document.querySelector('.sidebar').hidden
                    const minSidebarHidden = document.querySelector('.minSidebar').hidden

                    document.querySelector('.sidebar').hidden = !sidebarHidden
                    document.querySelector('.sidebar').style.display = !sidebarHidden ? 'none' : 'block'
                    document.querySelector('.minSidebar').hidden = !minSidebarHidden
                }}
                alt='' src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"></img>
                <img alt='' src="https://img.icons8.com/color/48/000000/youtube-play.png" />
            </div>
            <SidebarBlock img={firstBlockImg} list={firstBlock} />
            <hr />
            <SidebarBlock img={secondBlockImg} title={'INSCRIÇÕES'} list={secondBlock} />
            <hr />
            <SidebarBlock img={thirdBlockImg} list={thirdBlock} />
            <hr />
            <SidebarBlock img={fourthBlockImg} title={'MAIS DO YOUTUBE'} list={fourthBlock} />
            <hr />
            <SidebarBlock img={fifthBlockImg} list={fifthBlock} />
            <hr />
            <div className='sidebarBottom'>
                <div>
                    <p>Sobre</p>
                    <p>Imprensa</p>
                    <p>Direitos autorais</p>
                    <p>Entre em contato</p>
                    <p>Criadores de conteúdo</p>
                    <p>Publicidade</p>
                    <p>Desenvolvedores</p>
                </div>
                <div>
                    <p>Termos</p>
                    <p>Privacidade</p>
                    <p>Política e segurança</p>
                    <p>Como funciona o YouTube</p>
                    <p>Testar os novos recursos</p>
                </div>
                
            </div>
        </div>
    )
}