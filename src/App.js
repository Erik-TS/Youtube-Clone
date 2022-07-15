import './App.css';
import TopNavbar from './components/TopNavbar'
import Content from './components/Content'
import MinSidebar from './components/sidebars/MinSidebar'
import Sidebar from './components/sidebars/Sidebar'
import IconsLinks from './components/IconsLinks'

function App() {

  const listLinks = [
    "https://icons8.com/icon/87487/casinha-de-cachorro",
    "https://icons8.com/icon/59832/cardápio",
    "https://icons8.com/icon/19318/reproduzir-youtube",
    "https://img.icons8.com/color/48/000000/youtube-play.png",
    "https://icons8.com/icon/74264/menu-quadrado",
    "https://icons8.com/icon/fdrGuRj6zCIt/bell",
    "https://icons8.com/icon/88004/bússola",
    "https://icons8.com/icon/87581/video-playlist",
    "https://icons8.com/icon/do8l1v9TxXHk/collection",
    "https://icons8.com/icon/6904/time-machine",
    "https://icons8.com/icon/YLoLWhVjkzlM/youtube-gaming",
    "https://icons8.com/icon/v3E9usxxX3xz/youtube",
    "https://icons8.com/icon/20183/light-on",
    "https://icons8.com/icon/6YtrB5VnlPqY/trophy",
    "https://icons8.com/icon/7rBT6EnGLrx9/youtube-live",
    "https://icons8.com/icon/RayYVWeF1uu1/movie",
    "https://icons8.com/icon/82767/clock",
    "https://icons8.com/icon/LcMH8YqF0Ej1/like",
    "https://icons8.com/icon/2760/expand-arrow",
    "https://icons8.com/icon/61227/play-album",
    "https://icons8.com/icon/82535/settings",
    "https://icons8.com/icon/94694/flag",
    "https://icons8.com/icon/83244/help",
    "https://icons8.com/icon/82450/about",
    "https://icons8.com/icon/nIIlw37EbWRh/create"
  ]

  const listNames = [
    'Casinha de cachorro',
    'Cardápio',
    'Reproduzir',
    'YouTube',
    'Menu Quadrado',
    'Bell',
    'Bússola',
    'Video Playlist',
    'Collection',
    'Time Machine',
    'Youtube gaming',        
    'Youtube',
    'Light On',
    'Trophy',
    'Youtube Live',
    'Movie',
    'Clock',
    'Like',
    'Expand Arrow',
    'Play Album',
    'Settings',
    'Flag',
    'Help',
    'About',
    'create'
  ]
  
  return (
    <div className="App">
      <TopNavbar />
      <Sidebar />
      <MinSidebar />
      <Content />
      <IconsLinks listLinks={listLinks} listNames={listNames} />
    </div>
  );
}

export default App;
