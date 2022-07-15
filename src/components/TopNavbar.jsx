export default function TopNavbar(props){
    return(
        <div className='navbar'>
            <div>
                <ul>
                    <li className={'logo'}>
                        <img alt='' src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                    </li>
                    <li className={'searchBox'}>
                        <input className={'searchInput'} placeholder={'Pesquisar'} type={'text'} />
                        <input className={'searchButton'} value={'🔍️'} type={'button'} />
                    </li>
                    <li className={'userFeatures'}>
                        <div style={{display: 'inline'}} className='user-menu-navbar'>
                            <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/ffffff/external-create-multimedia-anggara-basic-outline-anggara-putra.png" 
                            alt='' />
                            <img src="https://img.icons8.com/ios/50/ffffff/squared-menu.png" 
                            alt='' />
                            <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/ffffff/external-bell-ui-essential-kmg-design-basic-outline-kmg-design.png" alt='' />
                            <div className='userProfile'></div>
                        </div>
                    </li>
                </ul>    
            </div>
            
        </div>
    )
}