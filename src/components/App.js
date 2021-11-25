import './App.css';
import SubjectIcon from '@mui/icons-material/Subject';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddSlider from './Slider';
import Classes from './Classes';
import NovelSwiper from './NovelSwiper';
import Books from './Books';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarsIcon from '@mui/icons-material/Stars';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import QuizIcon from '@mui/icons-material/Quiz';
import RecommendIcon from '@mui/icons-material/Recommend';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FaceIcon from '@mui/icons-material/Face';

function App() {
  return (
    <div className="app">
      <header className="header">
        <SubjectIcon className="header__toggelIcon" style={{ cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
        <img className="header__logo" src="https://nogozo.com/static/mainapp/img/logo.png" alt="" />
        <div className="header__shopping">
          <ShoppingCartOutlinedIcon className="header__shoppingIcon" />
        </div>
      </header>
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input className="header__searchInput" type="text" placeholder="Search Product" />
      </div>

      <AddSlider />
      <Classes />
      <NovelSwiper />
      <Books />

      {/* sidebar */}
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
          <img className="header__logo" src="https://nogozo.com/static/mainapp/img/logo.png" alt="" />
          
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="slider__Iconsbox"><div className="slider__divider"></div>
            <div className="slider__Iconbar">
              <AccountBoxIcon className="slider__Icon" />
              <p>Profile</p>
            </div>

            <div className="slider__Iconbar">
              <AddLocationAltIcon className="slider__Icon" />
              <p>Address</p>
            </div>
            <div className="slider__Iconbar">
              <LocalShippingIcon className="slider__Icon" />
              <p>Orders</p>
            </div>
            <div className="slider__divider"></div>
            <div className="slider__Iconbar">
              <CollectionsBookmarkIcon className="slider__Icon" />
              <p>Coupons</p>
            </div>
            <div className="slider__Iconbar">
              <FaceIcon className="slider__Icon" />
              <p>Favourites</p>
            </div>
            <div className="slider__divider"></div>
            <div className="slider__Iconbar">
              <RecommendIcon className="slider__Icon" />
              <p>Share App</p>
            </div>
            <div className="slider__Iconbar">
              <QuizIcon className="slider__Icon" />
              <p>Help</p>
            </div>
            <div className="slider__Iconbar">
              <ReportProblemIcon className="slider__Icon" />
              <p>Report an issue</p>
            </div>
            <div className="slider__Iconbar">
              <StarsIcon className="slider__Icon" />
              <p>Rate App</p>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
