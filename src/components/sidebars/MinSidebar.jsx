import MinSideBarBlock from './MinSidebarBlock.jsx'
import {useEffect} from 'react'

export default function MinSideBar(props){

    const url = [
        'https://img.icons8.com/material-outlined/24/ffffff/dog-house.png',
        "https://img.icons8.com/material-outlined/24/ffffff/compass.png",
        "https://img.icons8.com/material-outlined/24/ffffff/video-playlist.png",
        "https://img.icons8.com/external-dashed-line-kawalan-studio/24/ffffff/external-collection-social-media-dashed-line-kawalan-studio.png"
    ]
    
    useEffect(() => {
        document.querySelector('.minSidebar').hidden = true
    })

    return(
        <div className={'minSidebar sidebar-style'}>
            <img onClick={() => {
                const sidebarHidden = document.querySelector('.sidebar').hidden
                const minSidebarHidden = document.querySelector('.minSidebar').hidden

                document.querySelector('.sidebar').hidden = !sidebarHidden
                document.querySelector('.sidebar').style.display = !sidebarHidden ? 'none' : 'block'
                document.querySelector('.minSidebar').hidden = !minSidebarHidden
            }}
            className={'minSidebarBurger'} src={"https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"} alt={''} />
            <MinSideBarBlock name={'Início'} img={url[0]}/>
            <MinSideBarBlock name={'Explorar'} img={url[1]}/>
            <MinSideBarBlock name={'Shorts'} img={url[2]}/>
            <MinSideBarBlock name={'Inscrições'} img={url[2]}/>
            <MinSideBarBlock name={'Biblioteca'} img={url[3]}/>
        </div>
    )
}