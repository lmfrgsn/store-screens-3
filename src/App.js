import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import hexToRgba from 'hex-to-rgba';

import Holder from "./Components/Holder";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Notification from "./Components/Notification";
import './App.css';
import Tiles from "./Components/Tiles";

function App() {

  const ios1 = useRef(null);
  const ios2 = useRef(null);

  const [file, setFile] = useState();
  const [listimage1, setListImage1] = useState();
  const [listimage2, setListImage2] = useState();
  const [listimage3, setListImage3] = useState();
  const [listimage4, setListImage4] = useState();
  const [listimage5, setListImage5] = useState();
  const [listimage6, setListImage6] = useState();

  const [featuredTitle, setFeaturedTitle] = useState('');
  const [featuredTile1Title, setFeaturedTile1Title] = useState('');
  const [featuredTile2Title, setFeaturedTile2Title] = useState('');
  const [featuredTile3Title, setFeaturedTile3Title] = useState('');
  const [featuredTile4Title, setFeaturedTile4Title] = useState('');
  const [featuredTile5Title, setFeaturedTile5Title] = useState('');
  const [featuredTile6Title, setFeaturedTile6Title] = useState('');

  const [listLayout, setListLayout] = useState('2columnList');

  const [themeColour, setThemeColour] = useState('#203554');
  const [appName, setAppName] = useState('App Name');
  const [homeTitle, setHomeTitle] = useState('Home List Title');
  const [lightMode, setLightMode] = useState(false);
  const [gradients, setGradients] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [android, setAndroid] = useState(false);
  const [displayDates, setDisplayDates] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const [shotWidth, setShotWidth] = useState(1290);
  const [shotHeight, setShotHeight] = useState(2796);

  const [deviceWidth, setDeviceWidth] = useState(946);

  const handleAllImages = () => {

    // html2Image.toPng(ios1);
    // html2Image.toPng(ios2);


    // let downloads = document.getElementsByClassName('download');
    // console.log(downloads[0]);
    // downloads[0].click();
    // downloads[1].click();
    // downloads[2].click();
    // downloads[3].click();
    // downloads[4].click();
    // downloads[5].click();
    // downloads[6].click();
    // downloads[7].click();
    // downloads[8].click();
    // downloads[9].click();
    // downloads[10].click();
    // downloads[11].click();
    // downloads[12].click();
    // downloads[13].click();
    // downloads[14].click();
    // downloads[15].click();
    // downloads[16].click();
    // downloads[17].click();
    // downloads[18].click();
    // downloads[19].click();


    // downloads.forEach(download => {
    //   console.log(download)
    // });
  };

  function handleFeaturedImageChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage1Change(e) {
    setListImage1(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage2Change(e) {
    setListImage2(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage3Change(e) {
    setListImage3(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage4Change(e) {
    setListImage4(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage5Change(e) {
    setListImage5(URL.createObjectURL(e.target.files[0]));
  }

  function handleListImage6Change(e) {
    setListImage6(URL.createObjectURL(e.target.files[0]));
  }

  function handleMultiImageChange(e) {
    console.log(e.target.files);

    if (e.target.files[0]) { setFile(URL.createObjectURL(e.target.files[0])) };
    if (e.target.files[1]) { setListImage1(URL.createObjectURL(e.target.files[1])) };
    if (e.target.files[2]) { setListImage2(URL.createObjectURL(e.target.files[2])) };
    if (e.target.files[3]) { setListImage3(URL.createObjectURL(e.target.files[3])) };
    if (e.target.files[4]) { setListImage4(URL.createObjectURL(e.target.files[4])) };
    if (e.target.files[5]) { setListImage5(URL.createObjectURL(e.target.files[5])) };
    if (e.target.files[6]) { setListImage6(URL.createObjectURL(e.target.files[6])) };
  }

  function handleColorChange(e) {
    setThemeColour(e.target.value);
    // console.log(hexToRgba(themeColour));

    let hex = hexToRgba(e.target.value);

    var rgb = hex.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');

    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];

    let lum = (0.2126 * (r / 255)) + (0.7152 * (g / 255)) + (0.0722 * (b / 255));

    if ((lum) >= 0.673) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }

  }

  function handleListLayoutChange(e) {
    setListLayout(e.target.value);
  }

  function handleAppNameChange(e) {
    setAppName(e.target.value);
  }

  function handleHomeTitleChange(e) {
    setHomeTitle(e.target.value);
  }

  function handleLightModeChange() {
    setLightMode(!lightMode);
  }

  function handleGradientChange() {
    setGradients(!gradients);
  }

  function handleDisplayDatesChange() {
    setDisplayDates(!displayDates);
  }

  function handleShowIconsChange() {
    setShowIcons(!showIcons);
  }

  function handleFeaturedTitleChange(e) {
    setFeaturedTitle(e.target.value);
  }

  function handleFeaturedTile1TitleChange(e) {
    setFeaturedTile1Title(e.target.value);
  }

  function handleFeaturedTile2TitleChange(e) {
    setFeaturedTile2Title(e.target.value);
  }

  function handleFeaturedTile3TitleChange(e) {
    setFeaturedTile3Title(e.target.value);
  }

  function handleFeaturedTile4TitleChange(e) {
    setFeaturedTile4Title(e.target.value);
  }

  function handleFeaturedTile5TitleChange(e) {
    setFeaturedTile5Title(e.target.value);
  }

  function handleFeaturedTile6TitleChange(e) {
    setFeaturedTile6Title(e.target.value);
  }

  function handleDeviceChange(device) {

    if (device == 'phone55') {
      setShotWidth(1170);
      setShotHeight(2532);
      setDeviceWidth(946);
      setTablet(false);
    } else if (device == 'tablet12') {
      setShotWidth(2048);
      setShotHeight(2732);
      setDeviceWidth(1846);
      setTablet(true);
    } else if (device == 'androidPhone') {
      setShotWidth(1170);
      setShotHeight(2532);
      setDeviceWidth(946);
      setTablet(false);
      setAndroid(true);
    } else {
      setShotWidth(1290);
      setShotHeight(2796);
      setDeviceWidth(946);
      setTablet(false);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: "0 0 20px 0", fontWeight: 900 }}>App Store Screen Generator</h1>
        {/* <div className="btn-group">
          <button onClick={() => { handleDeviceChange('phone67') }}>iPhone 6.7" Display</button>
          <button onClick={() => { handleDeviceChange('phone55') }}>iPhone 5.5" Display</button>
          <button onClick={() => { handleDeviceChange('tablet12') }}>iPad 12.9" Display</button>
          <button onClick={() => { handleDeviceChange('androidPhone') }}>Android Phone</button>
        </div> */}
      </div>
      <div className="App" style={{ display: "flex" }}>
        <div className="AppControls" style={{ display: "flex", flexDirection: "column", border: "2px solid #efefef", padding: 20, borderRadius: 4 }}>
          {/* <h4>App Details</h4> */}
          <div>
            <label htmlFor="appName">App Name</label>
            <input id="appName" onChange={handleAppNameChange} value={appName} type='text' autoFocus={true} />
          </div>
          <div>
            <label htmlFor="themeColour">Theme Colour</label>
            <input type="color" id="themeColour" name="themeColour" value={themeColour} onChange={handleColorChange} />
          </div>
          {/* <h4>Home List</h4> */}
          <div>
            <label htmlFor="homeTitle">Home List Title Name</label>
            <input id="homeTitle" onChange={handleHomeTitleChange} value={homeTitle} type='text' />
          </div>

          <div>
            <label htmlFor="listType">List Layout</label>
            <select name="listType" id="listType" onChange={handleListLayoutChange}>
              <option value="smallList">Small List</option>
              <option value="mediumList">Medium List</option>
              <option value="2columnList" selected>2 Column List</option>
              <option value="polaroid">Polaroid</option>
              <option value="miniPolaroid">Mini Polaroid</option>
              <option value="gallery">Gallery</option>
              <option value="letterbox">Letterbox</option>
              <option value="headline">Headline</option>
              <option value="feedMag">Feed Mag</option>
            </select>
          </div>

          <div style={{ display: "none" }}>
            <label htmlFor="featuredImage">Featured Image</label>
            <input type="file" id="featuredImage" onChange={handleFeaturedImageChange} />
            {/* <img src={file} /> */}
          </div>
          <div className="inline">
            <label htmlFor="gradients">Show Gradients</label>
            <input id="gradients" type="checkbox" onChange={(e) => handleGradientChange(e.target.checked)} checked={gradients} />
          </div>
          <div className="inline">
            <label htmlFor="showIcons">Show Icons</label>
            <input id="showIcons" type="checkbox" onChange={(e) => handleShowIconsChange(e.target.checked)} checked={showIcons} />
          </div>
          <div className="inline">
            <label htmlFor="displayDates">Display Dates</label>
            <input id="displayDates" type="checkbox" onChange={(e) => handleDisplayDatesChange(e.target.checked)} checked={displayDates} />
          </div>
          <div>
            <label htmlFor="multiImageUpload" className="imagesSelect">Select Featured Images</label>
            <input type="file" id="multiImageUpload" className="imagesSelectInput" multiple onChange={handleMultiImageChange} />
          </div>
          <div>
            <label htmlFor="featuredTitle">Featured Title</label>
            <input id="featuredTitle" onChange={handleFeaturedTitleChange} value={featuredTitle} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile1Title">Tile 1</label>
            <input id="featuredTile1Title" onChange={handleFeaturedTile1TitleChange} value={featuredTile1Title} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile2Title">Tile 2</label>
            <input id="featuredTile2Title" onChange={handleFeaturedTile2TitleChange} value={featuredTile2Title} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile3Title">Tile 3</label>
            <input id="featuredTile3Title" onChange={handleFeaturedTile3TitleChange} value={featuredTile3Title} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile4Title">Tile 4</label>
            <input id="featuredTile4Title" onChange={handleFeaturedTile4TitleChange} value={featuredTile4Title} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile5Title">Tile 5</label>
            <input id="featuredTile5Title" onChange={handleFeaturedTile5TitleChange} value={featuredTile5Title} type='text' />
          </div>
          <div>
            <label htmlFor="featuredTile6Title">Tile 6</label>
            <input id="featuredTile6Title" onChange={handleFeaturedTile6TitleChange} value={featuredTile6Title} type='text' />
          </div>
          <div style={{ display: "none" }}>
            <label htmlFor="listImage1">Item 1 Image</label>
            <input type="file" id="listImage1" onChange={handleListImage1Change} />
          </div>
          <div style={{ display: "none" }}>
            <label htmlFor="listImage2">Item 2 Image</label>
            <input type="file" id="listImage2" onChange={handleListImage2Change} />
          </div>
          <div style={{ display: "none" }}>
            <label htmlFor="listImage3">Item 3 Image</label>
            <input type="file" id="listImage3" onChange={handleListImage3Change} />
          </div>
          <div style={{ display: "none" }}>
            <label htmlFor="listImage4">Item 4 Image</label>
            <input type="file" id="listImage4" onChange={handleListImage4Change} />
          </div>
          <div style={{ display: "none" }}>
            <label htmlFor="listImage5">Item 5 Image</label>
            <input type="file" id="listImage5" onChange={handleListImage5Change} />
          </div>
          <div style={{ display: "none" }}>Something Else
            <label htmlFor="listImage6">Item 6 Image</label>
            <input type="file" id="listImage6" onChange={handleListImage6Change} />
          </div>
          <hr />
          {/* <button onClick={handleAllImages} className="download-btn">Download All</button> */}
        </div>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, overflow: "scroll" }}>

          <h3 style={{ marginTop: 0 }}>iPhone 6.7" Display <span>1290x2796</span></h3>

          <div className="AppScreens" style={{ display: "flex", flexGrow: 1, overflow: "scroll" }}>
            <Holder shotWidth={1290} shotHeight={2796} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText={`Welcome to ${appName}`} imageName="iphone-6-7-display-1" backgroundColor={'#F4F4F4'} marginOffset={"172px"} ref={ios1}>
              <Navbar title={homeTitle} themeColour={themeColour} lightMode={lightMode} rightIcons={true} menuIcon={true} extraTop={true} />
              <Body>
                <label htmlFor="featuredImage">
                  <div className="featured-image" style={{ position: 'relative' }}>
                    <img src={file ? file : 'plus.png'} style={{ width: "100%", height: tablet ? "1600px" : "760px", objectFit: "cover", borderRadius: "16px" }} />
                    <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 20 }}>
                      <p style={{ fontSize: "64px", fontWeight: "600", margin: 0, marginBottom: "0", zIndex: 20 }}>{featuredTitle}</p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                          <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                          </svg>
                          <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                          <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>1 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                    {/* <div style={{ width: "100%", height: "760px", backgroundSize: "cover", borderRadius: "16px", backgroundImage: `url(${file} ? ${file} : 'https://placehold.co/1200x1200'` }}>test</div> */}
                  </div>
                </label>
                <Tiles listLayout={listLayout} gradients={gradients} showIcons={showIcons} displayDates={displayDates} listimage1={listimage1} featuredTile1Title={featuredTile1Title} listimage2={listimage2} featuredTile2Title={featuredTile2Title} listimage3={listimage3} featuredTile3Title={featuredTile3Title} listimage4={listimage4} featuredTile4Title={featuredTile4Title} listimage5={listimage5} featuredTile5Title={featuredTile5Title} listimage6={listimage6} featuredTile6Title={featuredTile6Title} />
              </Body>
            </Holder>

            <Holder shotWidth={1290} shotHeight={2796} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} backgroundColor="#F5F5F5" displayText="Get instant updates and
notifications" imageName="iphone-6-7-display-2" background="top" marginOffset={"172px"} ref={ios2}>
              <Navbar title="Notifications" themeColour={themeColour} lightMode={lightMode} extraTop={true} />
              <Body>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "1.75rem", color: lightMode ? "#000" : "#fff" }}>
                  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9505 18.9586C63.2286 20.2366 63.2286 22.3088 61.9505 23.5869L25.9505 59.5869C24.6725 60.865 22.6003 60.865 21.3222 59.5869L4.95856 43.2233C3.68048 41.9452 3.68048 39.873 4.95856 38.5949C6.23664 37.3168 8.30882 37.3168 9.5869 38.5949L23.6364 52.6444L57.3222 18.9586C58.6003 17.6805 60.6724 17.6805 61.9505 18.9586ZM75.0414 32.0495C76.3195 33.3276 76.3195 35.3997 75.0414 36.6778L50.496 61.2233C49.2179 62.5013 47.1457 62.5013 45.8677 61.2233L40.9586 56.3142C39.6805 55.0361 39.6805 52.9639 40.9586 51.6858C42.2366 50.4078 44.3088 50.4078 45.5869 51.6858L48.1818 54.2808L70.4131 32.0495C71.6912 30.7714 73.7634 30.7714 75.0414 32.0495Z" fill="currentColor" />
                  </svg>
                  <p style={{ margin: 0, marginLeft: "8px", fontSize: "32px", fontWeight: "500" }}>Mark all as read</p>
                </div>
                <Notification text='Great feedback from ACME Corp!' timestamp="1 hour" unread={true} icon="bell.svg" quotes />
                {/* <Notification text={`Leave feedback on the new ${appName} app!`} timestamp="1 day" unread={true} icon="like-active.svg"/> */}
                <Notification text='Kate McGowan liked your comment: "Nice work!"' timestamp="4 hours" unread={true} icon="like-active.svg" image="person-3.png" />
                <Notification text='Some exciting news! ' timestamp="1 day" unread={false} icon="bell.svg" emoji={true} />
                <Notification text='Ava Davis mentioned you in a comment: "Great to meet some new team members!"' timestamp="2 days" unread={false} icon="mentions.svg" image="person-4.png" />
                {/* <Notification text="Quick company announcement video!" timestamp="1 day" unread={false} icon="user-plus.svg"/>
                <Notification text="Quick company announcement video!" timestamp="1 day" unread={false} icon="ribbon.svg"/>
                <Notification text="Quick company announcement video!" timestamp="1 day" unread={false} icon="comment-active.svg"/> */}
              </Body>
            </Holder>

            <Holder shotWidth={1290} shotHeight={2796} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText="Be part of the conversation" imageName="iphone-6-7-display-3" marginOffset={"172px"}>
              <Navbar title="Updates from the Team" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} extraTop={true} />
              <Body compact={true} noPadding={true}>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }}>Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }}>Here's to our continued success!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, backgroundColor: "#fff", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                  <div style={{ width: "280px" }}>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1rem" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.9466 8.60017C19.4906 7.54379 22.2182 7 24.9729 7C27.7276 7 30.4552 7.54379 32.9993 8.60017C35.5434 9.65656 37.8539 11.2048 39.7984 13.156L39.8092 13.1669L40 13.3603L40.1908 13.167L40.2017 13.156C42.1462 11.2048 44.4567 9.65656 47.0008 8.60017C49.5448 7.54379 52.2724 7 55.0271 7C57.7818 7 60.5094 7.54379 63.0535 8.60017C65.5967 9.6562 67.9065 11.2037 69.8505 13.154C78.1736 21.4793 78.3586 35.2446 68.4964 45.2917L68.4751 45.3133L42.3125 71.4759C41.6992 72.0892 40.8674 72.4338 40 72.4338C39.1327 72.4338 38.3009 72.0892 37.6876 71.4759L11.5036 45.2918C1.6413 35.2447 1.82647 21.4793 10.1495 13.154C12.0936 11.2037 14.4034 9.6562 16.9466 8.60017Z" fill="#D22B35" />
                    </svg>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                      <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", width: "60%", textAlign: "right" }}>
                    <p style={{ color: "#6D7C99", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10, width: "100%", display: "block" }}>12 Likes · 1 Comment</p>
                  </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F6F6F6", padding: "40px", borderBottom: "1px solid #D9D9D9" }}>
                  <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                      <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0 }}>Joseph Smith</p>
                      <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 10, margin: 0, width: "200px" }}>5 mins</p>
                    </div>
                    <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 6 }}>Client Executive</p>
                    <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 16 }}>Great stuff everybody!</p>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9463 8.60017C19.4904 7.54379 22.218 7 24.9727 7C27.7274 7 30.455 7.54379 32.999 8.60017C35.5431 9.65656 37.8536 11.2048 39.7981 13.156L39.809 13.1669L39.9998 13.3603L40.1906 13.167L40.2015 13.156C42.1459 11.2048 44.4564 9.65656 47.0005 8.60017C49.5446 7.54379 52.2722 7 55.0269 7C57.7816 7 60.5092 7.54379 63.0532 8.60017C65.5964 9.6562 67.9063 11.2037 69.8503 13.154C78.1733 21.4793 78.3584 35.2446 68.4961 45.2917L68.4749 45.3133L42.3122 71.4759C41.6989 72.0892 40.8671 72.4338 39.9998 72.4338C39.1324 72.4338 38.3006 72.0892 37.6873 71.4759L11.5033 45.2918C1.64106 35.2447 1.82622 21.4793 10.1493 13.154C12.0933 11.2037 14.4031 9.6562 16.9463 8.60017ZM24.9727 13.5407C23.0788 13.5407 21.2036 13.9145 19.4546 14.6408C17.7055 15.3671 16.117 16.4315 14.7802 17.7729L14.7762 17.777C9.23753 23.3157 8.57125 32.9584 16.1609 40.6994L39.9998 64.5385L63.8386 40.6994C71.4283 32.9584 70.762 23.3157 65.2234 17.777L65.2194 17.7729C63.8825 16.4315 62.2941 15.3671 60.545 14.6408C58.7959 13.9145 56.9207 13.5407 55.0269 13.5407C53.133 13.5407 51.2578 13.9145 49.5088 14.6408C47.762 15.3661 46.1754 16.4287 44.8397 17.7676C44.8379 17.7694 44.8362 17.7712 44.8344 17.7729L42.3271 20.3129C41.7126 20.9353 40.8744 21.2857 39.9998 21.2857C39.1251 21.2857 38.2869 20.9353 37.6725 20.3129L35.1652 17.7729C35.1634 17.7712 35.1616 17.7694 35.1599 17.7676C33.8242 16.4287 32.2376 15.3661 30.4908 14.6408C28.7417 13.9145 26.8665 13.5407 24.9727 13.5407Z" fill="#D22B35" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Like</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 60, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                          <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", padding: "40px" }}>
                  <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", flexGrow: "1" }}>Write a comment</p>
                </div>
              </Body>
            </Holder>

            <Holder shotWidth={1290} shotHeight={2796} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText="Search for and find
the information you need" imageName="iphone-6-7-display-4" background="top" marginOffset={"172px"}>
              {!android ?
                <><Navbar title="Search" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} extraTop={true} />
                  <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 5px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                    <div style={{ display: "flex", flexGrow: 1, alignItems: "center", background: "rgba(255,255,255,0.3)", marginRight: 30, borderRadius: 12 }}>
                      <svg style={{ padding: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                      <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search</p>
                    </div>
                    <div style={{ padding: "0 0.5rem 0" }}>
                      <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div></>
                : <><div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                  <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                    <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                    <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                    }</p>
                  </div>
                  <div style={{ padding: "12px 1rem 0px" }}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                    </svg>
                  </div>
                </div></>}
              <Body compact={true}>
                <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
              </Body>
            </Holder>
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <h3>iPhone 5.5" Display <span>1242 x 2208</span></h3>
          {/* 1170x2532 */}
          <div className="AppScreens" style={{ display: "flex", flexGrow: 1, overflow: "scroll" }}>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText={`Welcome to ${appName}`} imageName="iphone-5-5-display-1" backgroundColor={'#F4F4F4'} marginOffset={"148px"}>
              <Navbar title={homeTitle} themeColour={themeColour} lightMode={lightMode} rightIcons={true} menuIcon={true} />
              <Body>
                <label htmlFor="featuredImage">
                  <div className="featured-image" style={{ position: 'relative' }}>
                    <img src={file ? file : 'plus.png'} style={{ width: "100%", height: tablet ? "1600px" : "760px", objectFit: "cover", borderRadius: "16px" }} />
                    <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 20 }}>
                      <p style={{ fontSize: "64px", fontWeight: "600", margin: 0, marginBottom: "0", zIndex: 20 }}>{featuredTitle}</p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                          <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                          </svg>
                          <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                          <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>1 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                  </div>
                </label>
                <Tiles listLayout={listLayout} gradients={gradients} showIcons={showIcons} displayDates={displayDates} listimage1={listimage1} featuredTile1Title={featuredTile1Title} listimage2={listimage2} featuredTile2Title={featuredTile2Title} listimage3={listimage3} featuredTile3Title={featuredTile3Title} listimage4={listimage4} featuredTile4Title={featuredTile4Title} listimage5={listimage5} featuredTile5Title={featuredTile5Title} listimage6={listimage6} featuredTile6Title={featuredTile6Title} />
              </Body>
            </Holder>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} backgroundColor="#F5F5F5" displayText="Get instant updates and
notifications" imageName="iphone-5-5-display-2" background="top" marginOffset={"148px"}>
              <Navbar title="Notifications" themeColour={themeColour} lightMode={lightMode} />
              <Body>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "1.75rem", color: lightMode ? "#000" : "#fff" }}>
                  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9505 18.9586C63.2286 20.2366 63.2286 22.3088 61.9505 23.5869L25.9505 59.5869C24.6725 60.865 22.6003 60.865 21.3222 59.5869L4.95856 43.2233C3.68048 41.9452 3.68048 39.873 4.95856 38.5949C6.23664 37.3168 8.30882 37.3168 9.5869 38.5949L23.6364 52.6444L57.3222 18.9586C58.6003 17.6805 60.6724 17.6805 61.9505 18.9586ZM75.0414 32.0495C76.3195 33.3276 76.3195 35.3997 75.0414 36.6778L50.496 61.2233C49.2179 62.5013 47.1457 62.5013 45.8677 61.2233L40.9586 56.3142C39.6805 55.0361 39.6805 52.9639 40.9586 51.6858C42.2366 50.4078 44.3088 50.4078 45.5869 51.6858L48.1818 54.2808L70.4131 32.0495C71.6912 30.7714 73.7634 30.7714 75.0414 32.0495Z" fill="currentColor" />
                  </svg>
                  <p style={{ margin: 0, marginLeft: "8px", fontSize: "32px", fontWeight: "500" }}>Mark all as read</p>
                </div>
                <Notification text='Great feedback from ACME Corp!' timestamp="1 hour" unread={true} icon="bell.svg" quotes />
                {/* <Notification text={`Leave feedback on the new ${appName} app!`} timestamp="1 day" unread={true} icon="like-active.svg"/> */}
                <Notification text='Kate McGowan liked your comment: "Nice work!"' timestamp="4 hours" unread={true} icon="like-active.svg" image="person-3.png" />
                <Notification text='Some exciting news! ' timestamp="1 day" unread={false} icon="bell.svg" emoji={true} />
                <Notification text='Ava Davis mentioned you in a comment: "Great to meet some new team members!"' timestamp="2 days" unread={false} icon="mentions.svg" image="person-4.png" />
              </Body>
            </Holder>


            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText="Be part of the conversation" imageName="iphone-5-5-display-3" marginOffset={"148px"}>
              <Navbar title="Updates from the Team" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
              <Body compact={true} noPadding={true}>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }}>Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }}>Here's to our continued success!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, backgroundColor: "#fff", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                  <div style={{ width: "280px" }}>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1rem" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.9466 8.60017C19.4906 7.54379 22.2182 7 24.9729 7C27.7276 7 30.4552 7.54379 32.9993 8.60017C35.5434 9.65656 37.8539 11.2048 39.7984 13.156L39.8092 13.1669L40 13.3603L40.1908 13.167L40.2017 13.156C42.1462 11.2048 44.4567 9.65656 47.0008 8.60017C49.5448 7.54379 52.2724 7 55.0271 7C57.7818 7 60.5094 7.54379 63.0535 8.60017C65.5967 9.6562 67.9065 11.2037 69.8505 13.154C78.1736 21.4793 78.3586 35.2446 68.4964 45.2917L68.4751 45.3133L42.3125 71.4759C41.6992 72.0892 40.8674 72.4338 40 72.4338C39.1327 72.4338 38.3009 72.0892 37.6876 71.4759L11.5036 45.2918C1.6413 35.2447 1.82647 21.4793 10.1495 13.154C12.0936 11.2037 14.4034 9.6562 16.9466 8.60017Z" fill="#D22B35" />
                    </svg>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                      <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", width: "60%", textAlign: "right" }}>
                    <p style={{ color: "#6D7C99", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10, width: "100%", display: "block" }}>12 Likes · 1 Comment</p>
                  </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F6F6F6", padding: "40px", borderBottom: "1px solid #D9D9D9" }}>
                  <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                      <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0 }}>Joseph Smith</p>
                      <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 10, margin: 0, width: "200px" }}>5 mins</p>
                    </div>
                    <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 6 }}>Client Executive</p>
                    <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 16 }}>Great stuff everybody!</p>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9463 8.60017C19.4904 7.54379 22.218 7 24.9727 7C27.7274 7 30.455 7.54379 32.999 8.60017C35.5431 9.65656 37.8536 11.2048 39.7981 13.156L39.809 13.1669L39.9998 13.3603L40.1906 13.167L40.2015 13.156C42.1459 11.2048 44.4564 9.65656 47.0005 8.60017C49.5446 7.54379 52.2722 7 55.0269 7C57.7816 7 60.5092 7.54379 63.0532 8.60017C65.5964 9.6562 67.9063 11.2037 69.8503 13.154C78.1733 21.4793 78.3584 35.2446 68.4961 45.2917L68.4749 45.3133L42.3122 71.4759C41.6989 72.0892 40.8671 72.4338 39.9998 72.4338C39.1324 72.4338 38.3006 72.0892 37.6873 71.4759L11.5033 45.2918C1.64106 35.2447 1.82622 21.4793 10.1493 13.154C12.0933 11.2037 14.4031 9.6562 16.9463 8.60017ZM24.9727 13.5407C23.0788 13.5407 21.2036 13.9145 19.4546 14.6408C17.7055 15.3671 16.117 16.4315 14.7802 17.7729L14.7762 17.777C9.23753 23.3157 8.57125 32.9584 16.1609 40.6994L39.9998 64.5385L63.8386 40.6994C71.4283 32.9584 70.762 23.3157 65.2234 17.777L65.2194 17.7729C63.8825 16.4315 62.2941 15.3671 60.545 14.6408C58.7959 13.9145 56.9207 13.5407 55.0269 13.5407C53.133 13.5407 51.2578 13.9145 49.5088 14.6408C47.762 15.3661 46.1754 16.4287 44.8397 17.7676C44.8379 17.7694 44.8362 17.7712 44.8344 17.7729L42.3271 20.3129C41.7126 20.9353 40.8744 21.2857 39.9998 21.2857C39.1251 21.2857 38.2869 20.9353 37.6725 20.3129L35.1652 17.7729C35.1634 17.7712 35.1616 17.7694 35.1599 17.7676C33.8242 16.4287 32.2376 15.3661 30.4908 14.6408C28.7417 13.9145 26.8665 13.5407 24.9727 13.5407Z" fill="#D22B35" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Like</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 60, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                          <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", padding: "40px" }}>
                  <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", flexGrow: "1" }}>Write a comment</p>
                </div>
              </Body>
            </Holder>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={946} tablet={false} displayText="Search for and find
the information you need" imageName="iphone-5-5-display-4" background="top" marginOffset={"148px"}>
              {!android ?
                <><Navbar title="Search" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
                  <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 5px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                    <div style={{ display: "flex", flexGrow: 1, alignItems: "center", background: "rgba(255,255,255,0.3)", marginRight: 30, borderRadius: 12 }}>
                      <svg style={{ padding: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                      <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search</p>
                    </div>
                    <div style={{ padding: "0 0.5rem 0" }}>
                      <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div></>
                : <><div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                  <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                    <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                    <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                    }</p>
                  </div>
                  <div style={{ padding: "12px 1rem 0px" }}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                    </svg>
                  </div>
                </div></>}
              <Body compact={true}>
                <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
              </Body>
            </Holder>
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <h3>iPad 12.9" Display <span>2048x2732</span></h3>

          <div className="AppScreens" style={{ display: "flex", flexGrow: 1, overflow: "scroll" }}>

            <Holder shotWidth={2048} shotHeight={2732} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1846} tablet={true} displayText={`Welcome to ${appName}`} imageName="ipad-12-9-display-1" backgroundColor={'#F4F4F4'} marginOffset={"101px"}>
              <Navbar title={homeTitle} themeColour={themeColour} lightMode={lightMode} rightIcons={true} menuIcon={true} />
              <Body>
                <label htmlFor="featuredImage">
                  <div className="featured-image" style={{ position: 'relative', marginBottom: '60px' }}>
                    <img src={file ? file : 'plus.png'} style={{ width: "100%", height: "1600px", objectFit: "cover", borderRadius: "16px" }} />
                    <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 20 }}>
                      <p style={{ fontSize: "64px", fontWeight: "600", margin: 0, marginBottom: "0", zIndex: 20 }}>{featuredTitle}</p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                          <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                          </svg>
                          <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                          <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>1 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>

                  </div>
                </label>
                <Tiles tablet={true} listLayout={listLayout} gradients={gradients} showIcons={showIcons} displayDates={displayDates} listimage1={listimage1} featuredTile1Title={featuredTile1Title} listimage2={listimage2} featuredTile2Title={featuredTile2Title} listimage3={listimage3} featuredTile3Title={featuredTile3Title} listimage4={listimage4} featuredTile4Title={featuredTile4Title} listimage5={listimage5} featuredTile5Title={featuredTile5Title} listimage6={listimage6} featuredTile6Title={featuredTile6Title} />
              </Body>
            </Holder>

            <Holder shotWidth={2048} shotHeight={2732} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1846} tablet={true} backgroundColor="#F5F5F5" displayText="Get instant updates and
notifications" imageName="ipad-12-9-display-2" background="top" marginOffset={"101px"}>
              <Navbar title="Notifications" themeColour={themeColour} lightMode={lightMode} />
              <Body>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "1.75rem", color: lightMode ? "#000" : "#fff" }}>
                  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9505 18.9586C63.2286 20.2366 63.2286 22.3088 61.9505 23.5869L25.9505 59.5869C24.6725 60.865 22.6003 60.865 21.3222 59.5869L4.95856 43.2233C3.68048 41.9452 3.68048 39.873 4.95856 38.5949C6.23664 37.3168 8.30882 37.3168 9.5869 38.5949L23.6364 52.6444L57.3222 18.9586C58.6003 17.6805 60.6724 17.6805 61.9505 18.9586ZM75.0414 32.0495C76.3195 33.3276 76.3195 35.3997 75.0414 36.6778L50.496 61.2233C49.2179 62.5013 47.1457 62.5013 45.8677 61.2233L40.9586 56.3142C39.6805 55.0361 39.6805 52.9639 40.9586 51.6858C42.2366 50.4078 44.3088 50.4078 45.5869 51.6858L48.1818 54.2808L70.4131 32.0495C71.6912 30.7714 73.7634 30.7714 75.0414 32.0495Z" fill="currentColor" />
                  </svg>
                  <p style={{ margin: 0, marginLeft: "8px", fontSize: "32px", fontWeight: "500" }}>Mark all as read</p>
                </div>
                <Notification text='Great feedback from ACME Corp!' timestamp="1 hour" unread={true} icon="bell.svg" quotes />
                <Notification text='Kate McGowan liked your comment: "Nice work!"' timestamp="4 hours" unread={true} icon="like-active.svg" image="person-3.png" />
                <Notification text='Some exciting news! ' timestamp="1 day" unread={false} icon="bell.svg" emoji={true} />
                <Notification text='Ava Davis mentioned you in a comment: "Great to meet some new team members!"' timestamp="2 days" unread={false} icon="mentions.svg" image="person-4.png" />
              </Body>
            </Holder>


            <Holder shotWidth={2048} shotHeight={2732} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1846} tablet={true} displayText="Be part of the conversation" imageName="ipad-12-9-display-3" marginOffset={"101px"}>
              <Navbar title="Updates from the Team" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
              <Body compact={true} noPadding={true}>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }}>Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }}>Here's to our continued success!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, backgroundColor: "#fff", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                  <div style={{ width: "280px" }}>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1rem" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.9466 8.60017C19.4906 7.54379 22.2182 7 24.9729 7C27.7276 7 30.4552 7.54379 32.9993 8.60017C35.5434 9.65656 37.8539 11.2048 39.7984 13.156L39.8092 13.1669L40 13.3603L40.1908 13.167L40.2017 13.156C42.1462 11.2048 44.4567 9.65656 47.0008 8.60017C49.5448 7.54379 52.2724 7 55.0271 7C57.7818 7 60.5094 7.54379 63.0535 8.60017C65.5967 9.6562 67.9065 11.2037 69.8505 13.154C78.1736 21.4793 78.3586 35.2446 68.4964 45.2917L68.4751 45.3133L42.3125 71.4759C41.6992 72.0892 40.8674 72.4338 40 72.4338C39.1327 72.4338 38.3009 72.0892 37.6876 71.4759L11.5036 45.2918C1.6413 35.2447 1.82647 21.4793 10.1495 13.154C12.0936 11.2037 14.4034 9.6562 16.9466 8.60017Z" fill="#D22B35" />
                    </svg>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                      <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", width: "60%", textAlign: "right" }}>
                    <p style={{ color: "#6D7C99", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10, width: "100%", display: "block" }}>12 Likes · 1 Comment</p>
                  </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F6F6F6", padding: "40px", borderBottom: "1px solid #D9D9D9" }}>
                  <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                      <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0 }}>Joseph Smith</p>
                      <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 10, margin: 0, width: "200px" }}>5 mins</p>
                    </div>
                    <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 6 }}>Client Executive</p>
                    <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 16 }}>Great stuff everybody!</p>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9463 8.60017C19.4904 7.54379 22.218 7 24.9727 7C27.7274 7 30.455 7.54379 32.999 8.60017C35.5431 9.65656 37.8536 11.2048 39.7981 13.156L39.809 13.1669L39.9998 13.3603L40.1906 13.167L40.2015 13.156C42.1459 11.2048 44.4564 9.65656 47.0005 8.60017C49.5446 7.54379 52.2722 7 55.0269 7C57.7816 7 60.5092 7.54379 63.0532 8.60017C65.5964 9.6562 67.9063 11.2037 69.8503 13.154C78.1733 21.4793 78.3584 35.2446 68.4961 45.2917L68.4749 45.3133L42.3122 71.4759C41.6989 72.0892 40.8671 72.4338 39.9998 72.4338C39.1324 72.4338 38.3006 72.0892 37.6873 71.4759L11.5033 45.2918C1.64106 35.2447 1.82622 21.4793 10.1493 13.154C12.0933 11.2037 14.4031 9.6562 16.9463 8.60017ZM24.9727 13.5407C23.0788 13.5407 21.2036 13.9145 19.4546 14.6408C17.7055 15.3671 16.117 16.4315 14.7802 17.7729L14.7762 17.777C9.23753 23.3157 8.57125 32.9584 16.1609 40.6994L39.9998 64.5385L63.8386 40.6994C71.4283 32.9584 70.762 23.3157 65.2234 17.777L65.2194 17.7729C63.8825 16.4315 62.2941 15.3671 60.545 14.6408C58.7959 13.9145 56.9207 13.5407 55.0269 13.5407C53.133 13.5407 51.2578 13.9145 49.5088 14.6408C47.762 15.3661 46.1754 16.4287 44.8397 17.7676C44.8379 17.7694 44.8362 17.7712 44.8344 17.7729L42.3271 20.3129C41.7126 20.9353 40.8744 21.2857 39.9998 21.2857C39.1251 21.2857 38.2869 20.9353 37.6725 20.3129L35.1652 17.7729C35.1634 17.7712 35.1616 17.7694 35.1599 17.7676C33.8242 16.4287 32.2376 15.3661 30.4908 14.6408C28.7417 13.9145 26.8665 13.5407 24.9727 13.5407Z" fill="#D22B35" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Like</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 60, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                          <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", padding: "40px" }}>
                  <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", flexGrow: "1" }}>Write a comment</p>
                </div>
              </Body>
            </Holder>

            <Holder shotWidth={2048} shotHeight={2732} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1846} tablet={true} displayText="Search for and find
the information you need" imageName="ipad-12-9-display-4" background="top" marginOffset={"101px"}>
              {!android ?
                <><Navbar title="Search" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
                  <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 5px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                    <div style={{ display: "flex", flexGrow: 1, alignItems: "center", background: "rgba(255,255,255,0.3)", marginRight: 30, borderRadius: 12 }}>
                      <svg style={{ padding: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                      <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search</p>
                    </div>
                    <div style={{ padding: "0 0.5rem 0" }}>
                      <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div></>
                : <><div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                  <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                    <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                    <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                    }</p>
                  </div>
                  <div style={{ padding: "12px 1rem 0px" }}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                    </svg>
                  </div>
                </div></>}
              <Body compact={true}>
                <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
              </Body>
            </Holder>
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <h3>Android Phone <span>1350x2400</span></h3>

          <div className="AppScreens" style={{ display: "flex", flexGrow: 1, overflow: "scroll" }}>

            <Holder shotWidth={1350} shotHeight={2400} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={880} tablet={false} displayText={`Welcome to ${appName}`} imageName="android-phone-display-1" backgroundColor={'#F4F4F4'} marginOffset={"235px"}>
              <Navbar title={homeTitle} themeColour={themeColour} lightMode={lightMode} rightIcons={true} menuIcon={true} />
              <Body>
                <label htmlFor="featuredImage">
                  <div className="featured-image" style={{ position: 'relative' }}>
                    <img src={file ? file : 'plus.png'} style={{ width: "100%", height: "820px", objectFit: "cover", borderRadius: "16px" }} />
                    {/* <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "64px", margin: 0, zIndex: 20 }}>{featuredTitle}</p>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div> */}
                    <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 20 }}>
                      <p style={{ fontSize: "64px", fontWeight: "600", margin: 0, marginBottom: "0", zIndex: 20 }}>{featuredTitle}</p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                          <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                          </svg>
                          <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                          <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>1 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                    {/* <div style={{ width: "100%", height: "760px", backgroundSize: "cover", borderRadius: "16px", backgroundImage: `url(${file} ? ${file} : 'https://placehold.co/1200x1200'` }}>test</div> */}
                  </div>
                </label>
                <Tiles listLayout={listLayout} gradients={gradients} showIcons={showIcons} displayDates={displayDates} listimage1={listimage1} featuredTile1Title={featuredTile1Title} listimage2={listimage2} featuredTile2Title={featuredTile2Title} listimage3={listimage3} featuredTile3Title={featuredTile3Title} listimage4={listimage4} featuredTile4Title={featuredTile4Title} listimage5={listimage5} featuredTile5Title={featuredTile5Title} listimage6={listimage6} featuredTile6Title={featuredTile6Title} />
              </Body>
            </Holder>

            <Holder shotWidth={1350} shotHeight={2400} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={880} tablet={false} backgroundColor="#F5F5F5" displayText="Get instant updates and
notifications" imageName="android-phone-display-2" background="top" marginOffset={"235px"}>
              <Navbar title="Notifications" themeColour={themeColour} lightMode={lightMode} />
              <Body>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "1.75rem", color: lightMode ? "#000" : "#fff" }}>
                  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9505 18.9586C63.2286 20.2366 63.2286 22.3088 61.9505 23.5869L25.9505 59.5869C24.6725 60.865 22.6003 60.865 21.3222 59.5869L4.95856 43.2233C3.68048 41.9452 3.68048 39.873 4.95856 38.5949C6.23664 37.3168 8.30882 37.3168 9.5869 38.5949L23.6364 52.6444L57.3222 18.9586C58.6003 17.6805 60.6724 17.6805 61.9505 18.9586ZM75.0414 32.0495C76.3195 33.3276 76.3195 35.3997 75.0414 36.6778L50.496 61.2233C49.2179 62.5013 47.1457 62.5013 45.8677 61.2233L40.9586 56.3142C39.6805 55.0361 39.6805 52.9639 40.9586 51.6858C42.2366 50.4078 44.3088 50.4078 45.5869 51.6858L48.1818 54.2808L70.4131 32.0495C71.6912 30.7714 73.7634 30.7714 75.0414 32.0495Z" fill="currentColor" />
                  </svg>
                  <p style={{ margin: 0, marginLeft: "8px", fontSize: "32px", fontWeight: "500" }}>Mark all as read</p>
                </div>
                <Notification text='Great feedback from ACME Corp!' timestamp="1 hour" unread={true} icon="bell.svg" quotes />
                <Notification text='Kate McGowan liked your comment: "Nice work!"' timestamp="4 hours" unread={true} icon="like-active.svg" image="person-3.png" />
                <Notification text='Some exciting news! ' timestamp="1 day" unread={false} icon="bell.svg" emoji={true} android />
                <Notification text='Ava Davis mentioned you in a comment: "Great to meet some new team members!"' timestamp="2 days" unread={false} icon="mentions.svg" image="person-4.png" />
              </Body>
            </Holder>


            <Holder shotWidth={1350} shotHeight={2400} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={880} tablet={false} displayText="Be part of the conversation" imageName="android-phone-display-3" marginOffset={"235px"}>
              <Navbar title="Updates from the Team" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
              <Body compact={true} noPadding={true}>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }}>Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }}>Here's to our continued success!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, backgroundColor: "#fff", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                  <div style={{ width: "280px" }}>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1rem" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.9466 8.60017C19.4906 7.54379 22.2182 7 24.9729 7C27.7276 7 30.4552 7.54379 32.9993 8.60017C35.5434 9.65656 37.8539 11.2048 39.7984 13.156L39.8092 13.1669L40 13.3603L40.1908 13.167L40.2017 13.156C42.1462 11.2048 44.4567 9.65656 47.0008 8.60017C49.5448 7.54379 52.2724 7 55.0271 7C57.7818 7 60.5094 7.54379 63.0535 8.60017C65.5967 9.6562 67.9065 11.2037 69.8505 13.154C78.1736 21.4793 78.3586 35.2446 68.4964 45.2917L68.4751 45.3133L42.3125 71.4759C41.6992 72.0892 40.8674 72.4338 40 72.4338C39.1327 72.4338 38.3009 72.0892 37.6876 71.4759L11.5036 45.2918C1.6413 35.2447 1.82647 21.4793 10.1495 13.154C12.0936 11.2037 14.4034 9.6562 16.9466 8.60017Z" fill="#D22B35" />
                    </svg>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                      <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", width: "60%", textAlign: "right" }}>
                    <p style={{ color: "#6D7C99", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10, width: "100%", display: "block" }}>12 Likes · 1 Comment</p>
                  </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F6F6F6", padding: "40px", borderBottom: "1px solid #D9D9D9" }}>
                  <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                      <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0 }}>Joseph Smith</p>
                      <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 10, margin: 0, width: "200px" }}>5 mins</p>
                    </div>
                    <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 6 }}>Client Executive</p>
                    <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 16 }}>Great stuff everybody!</p>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9463 8.60017C19.4904 7.54379 22.218 7 24.9727 7C27.7274 7 30.455 7.54379 32.999 8.60017C35.5431 9.65656 37.8536 11.2048 39.7981 13.156L39.809 13.1669L39.9998 13.3603L40.1906 13.167L40.2015 13.156C42.1459 11.2048 44.4564 9.65656 47.0005 8.60017C49.5446 7.54379 52.2722 7 55.0269 7C57.7816 7 60.5092 7.54379 63.0532 8.60017C65.5964 9.6562 67.9063 11.2037 69.8503 13.154C78.1733 21.4793 78.3584 35.2446 68.4961 45.2917L68.4749 45.3133L42.3122 71.4759C41.6989 72.0892 40.8671 72.4338 39.9998 72.4338C39.1324 72.4338 38.3006 72.0892 37.6873 71.4759L11.5033 45.2918C1.64106 35.2447 1.82622 21.4793 10.1493 13.154C12.0933 11.2037 14.4031 9.6562 16.9463 8.60017ZM24.9727 13.5407C23.0788 13.5407 21.2036 13.9145 19.4546 14.6408C17.7055 15.3671 16.117 16.4315 14.7802 17.7729L14.7762 17.777C9.23753 23.3157 8.57125 32.9584 16.1609 40.6994L39.9998 64.5385L63.8386 40.6994C71.4283 32.9584 70.762 23.3157 65.2234 17.777L65.2194 17.7729C63.8825 16.4315 62.2941 15.3671 60.545 14.6408C58.7959 13.9145 56.9207 13.5407 55.0269 13.5407C53.133 13.5407 51.2578 13.9145 49.5088 14.6408C47.762 15.3661 46.1754 16.4287 44.8397 17.7676C44.8379 17.7694 44.8362 17.7712 44.8344 17.7729L42.3271 20.3129C41.7126 20.9353 40.8744 21.2857 39.9998 21.2857C39.1251 21.2857 38.2869 20.9353 37.6725 20.3129L35.1652 17.7729C35.1634 17.7712 35.1616 17.7694 35.1599 17.7676C33.8242 16.4287 32.2376 15.3661 30.4908 14.6408C28.7417 13.9145 26.8665 13.5407 24.9727 13.5407Z" fill="#D22B35" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Like</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 60, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                          <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", padding: "40px" }}>
                  <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", flexGrow: "1" }}>Write a comment</p>
                </div>
              </Body>
            </Holder>

            <Holder shotWidth={1350} shotHeight={2400} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={880} tablet={false} displayText="Search for and find
the information you need" imageName="android-phone-display-4" background="top" marginOffset={"235px"}>
              <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                  <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                  <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                  }</p>
                </div>
                <div style={{ padding: "12px 1rem 0px" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <Body compact={true}>
                <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
              </Body>
            </Holder>
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <h3>Android Tablet <span>1242x2208</span></h3>

          <div className="AppScreens" style={{ display: "flex", flexGrow: 1, overflow: "scroll" }}>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1242} tablet={true} displayText={`Welcome to ${appName}`} imageName="android-tablet-display-1" backgroundColor={'#F4F4F4'} marginOffset={"auto"}>
              <Navbar title={homeTitle} themeColour={themeColour} lightMode={lightMode} rightIcons={true} menuIcon={true} />
              <Body>
                <label htmlFor="featuredImage">
                  <div className="featured-image" style={{ position: 'relative', marginBottom: '44px' }}>
                    <img src={file ? file : 'plus.png'} style={{ width: "100%", height: "1000px", objectFit: "cover", borderRadius: "16px" }} />
                    <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 20 }}>
                      <p style={{ fontSize: "64px", fontWeight: "600", margin: 0, marginBottom: "0", zIndex: 20 }}>{featuredTitle}</p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                          <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                          </svg>
                          <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                          <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>1 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                    {/* <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "64px", margin: 0, zIndex: 20 }}>{featuredTitle}</p>
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div> */}
                    {/* <div style={{ width: "100%", height: "760px", backgroundSize: "cover", borderRadius: "16px", backgroundImage: `url(${file} ? ${file} : 'https://placehold.co/1200x1200'` }}>test</div> */}
                  </div>
                </label>
                <Tiles tablet={true} listLayout={listLayout} gradients={gradients} showIcons={showIcons} displayDates={displayDates} listimage1={listimage1} featuredTile1Title={featuredTile1Title} listimage2={listimage2} featuredTile2Title={featuredTile2Title} listimage3={listimage3} featuredTile3Title={featuredTile3Title} listimage4={listimage4} featuredTile4Title={featuredTile4Title} listimage5={listimage5} featuredTile5Title={featuredTile5Title} listimage6={listimage6} featuredTile6Title={featuredTile6Title} />
              </Body>
            </Holder>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1242} tablet={true} backgroundColor="#F5F5F5" displayText="Get instant updates and
notifications" imageName="android-tablet-display-2" background="top" marginOffset={"auto"}>
              <Navbar title="Notifications" themeColour={themeColour} lightMode={lightMode} />
              <Body>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "1.75rem", color: lightMode ? "#000" : "#fff" }}>
                  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9505 18.9586C63.2286 20.2366 63.2286 22.3088 61.9505 23.5869L25.9505 59.5869C24.6725 60.865 22.6003 60.865 21.3222 59.5869L4.95856 43.2233C3.68048 41.9452 3.68048 39.873 4.95856 38.5949C6.23664 37.3168 8.30882 37.3168 9.5869 38.5949L23.6364 52.6444L57.3222 18.9586C58.6003 17.6805 60.6724 17.6805 61.9505 18.9586ZM75.0414 32.0495C76.3195 33.3276 76.3195 35.3997 75.0414 36.6778L50.496 61.2233C49.2179 62.5013 47.1457 62.5013 45.8677 61.2233L40.9586 56.3142C39.6805 55.0361 39.6805 52.9639 40.9586 51.6858C42.2366 50.4078 44.3088 50.4078 45.5869 51.6858L48.1818 54.2808L70.4131 32.0495C71.6912 30.7714 73.7634 30.7714 75.0414 32.0495Z" fill="currentColor" />
                  </svg>
                  <p style={{ margin: 0, marginLeft: "8px", fontSize: "32px", fontWeight: "500" }}>Mark all as read</p>
                </div>
                <Notification text='Great feedback from ACME Corp!' timestamp="1 hour" unread={true} icon="bell.svg" quotes />
                <Notification text='Kate McGowan liked your comment: "Nice work!"' timestamp="4 hours" unread={true} icon="like-active.svg" image="person-3.png" />
                <Notification text='Some exciting news! ' timestamp="1 day" unread={false} icon="bell.svg" emoji={true} android />
                <Notification text='Ava Davis mentioned you in a comment: "Great to meet some new team members!"' timestamp="2 days" unread={false} icon="mentions.svg" image="person-4.png" />
              </Body>
            </Holder>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1242} tablet={true} displayText="Be part of the conversation" imageName="android-tablet-display-3" marginOffset={"auto"}>
              <Navbar title="Updates from the Team" themeColour={themeColour} lightMode={lightMode} style='fullback' compact={true} />
              <Body compact={true} noPadding={true}>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }}>Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }}>Here's to our continued success!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30, backgroundColor: "#fff", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                  <div style={{ width: "280px" }}>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1rem" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.9466 8.60017C19.4906 7.54379 22.2182 7 24.9729 7C27.7276 7 30.4552 7.54379 32.9993 8.60017C35.5434 9.65656 37.8539 11.2048 39.7984 13.156L39.8092 13.1669L40 13.3603L40.1908 13.167L40.2017 13.156C42.1462 11.2048 44.4567 9.65656 47.0008 8.60017C49.5448 7.54379 52.2724 7 55.0271 7C57.7818 7 60.5094 7.54379 63.0535 8.60017C65.5967 9.6562 67.9065 11.2037 69.8505 13.154C78.1736 21.4793 78.3586 35.2446 68.4964 45.2917L68.4751 45.3133L42.3125 71.4759C41.6992 72.0892 40.8674 72.4338 40 72.4338C39.1327 72.4338 38.3009 72.0892 37.6876 71.4759L11.5036 45.2918C1.6413 35.2447 1.82647 21.4793 10.1495 13.154C12.0936 11.2037 14.4034 9.6562 16.9466 8.60017Z" fill="#D22B35" />
                    </svg>
                    <svg width="58" height="58" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                      <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", width: "60%", textAlign: "right" }}>
                    <p style={{ color: "#6D7C99", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10, width: "100%", display: "block" }}>12 Likes · 1 Comment</p>
                  </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F6F6F6", padding: "40px", borderBottom: "1px solid #D9D9D9" }}>
                  <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                      <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0 }}>Joseph Smith</p>
                      <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 10, margin: 0, width: "200px" }}>5 mins</p>
                    </div>
                    <p style={{ color: "#6D7C99", fontSize: 26, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 6 }}>Client Executive</p>
                    <p style={{ color: "#343D4C", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 16 }}>Great stuff everybody!</p>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9463 8.60017C19.4904 7.54379 22.218 7 24.9727 7C27.7274 7 30.455 7.54379 32.999 8.60017C35.5431 9.65656 37.8536 11.2048 39.7981 13.156L39.809 13.1669L39.9998 13.3603L40.1906 13.167L40.2015 13.156C42.1459 11.2048 44.4564 9.65656 47.0005 8.60017C49.5446 7.54379 52.2722 7 55.0269 7C57.7816 7 60.5092 7.54379 63.0532 8.60017C65.5964 9.6562 67.9063 11.2037 69.8503 13.154C78.1733 21.4793 78.3584 35.2446 68.4961 45.2917L68.4749 45.3133L42.3122 71.4759C41.6989 72.0892 40.8671 72.4338 39.9998 72.4338C39.1324 72.4338 38.3006 72.0892 37.6873 71.4759L11.5033 45.2918C1.64106 35.2447 1.82622 21.4793 10.1493 13.154C12.0933 11.2037 14.4031 9.6562 16.9463 8.60017ZM24.9727 13.5407C23.0788 13.5407 21.2036 13.9145 19.4546 14.6408C17.7055 15.3671 16.117 16.4315 14.7802 17.7729L14.7762 17.777C9.23753 23.3157 8.57125 32.9584 16.1609 40.6994L39.9998 64.5385L63.8386 40.6994C71.4283 32.9584 70.762 23.3157 65.2234 17.777L65.2194 17.7729C63.8825 16.4315 62.2941 15.3671 60.545 14.6408C58.7959 13.9145 56.9207 13.5407 55.0269 13.5407C53.133 13.5407 51.2578 13.9145 49.5088 14.6408C47.762 15.3661 46.1754 16.4287 44.8397 17.7676C44.8379 17.7694 44.8362 17.7712 44.8344 17.7729L42.3271 20.3129C41.7126 20.9353 40.8744 21.2857 39.9998 21.2857C39.1251 21.2857 38.2869 20.9353 37.6725 20.3129L35.1652 17.7729C35.1634 17.7712 35.1616 17.7694 35.1599 17.7676C33.8242 16.4287 32.2376 15.3661 30.4908 14.6408C28.7417 13.9145 26.8665 13.5407 24.9727 13.5407Z" fill="#D22B35" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Like</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 60, marginTop: 30 }}>
                        <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M73.4582 73.1706C73.0848 73.1706 72.8116 73.1251 72.6295 73.034L59.2336 68.681C58.3138 68.3623 57.4578 68.426 56.6746 68.8905C53.4509 70.5479 50.045 71.6953 46.4569 72.3419C42.8689 72.9885 39.2262 73.1251 35.5471 72.7608C30.1196 72.2053 25.0745 70.5297 20.4209 67.7157C15.9131 65.0019 12.2249 61.505 9.37455 57.2157C6.47863 52.8445 4.75747 48.1273 4.20196 43.0639C3.64645 38.0006 4.23839 33.1103 5.95955 28.3931C7.68982 23.6758 10.4127 19.5414 14.1464 15.9989C17.8711 12.4564 22.215 9.81546 27.1599 8.0943C32.1139 6.36403 37.2501 5.70835 42.5957 6.11815C47.9322 6.52795 52.9318 8.03055 57.5762 10.6077C62.1295 13.0939 65.9088 16.3814 68.9049 20.4794C72.0376 24.6229 74.0137 29.1763 74.8424 34.1485C75.3979 37.5089 75.4253 40.8601 74.9426 44.1932C74.46 47.5353 73.4309 50.7227 71.8736 53.7552C71.4547 54.5384 71.391 55.2487 71.6642 55.8953L75.9443 70.1927C76.0354 70.6481 76.0172 71.0943 75.8715 71.5041C75.7349 71.9139 75.4981 72.2599 75.1794 72.5423C74.7149 72.9612 74.1412 73.1615 73.4491 73.1615L73.4582 73.1706ZM39.6269 9.50583C35.3468 9.50583 31.2397 10.2799 27.3056 11.8189C23.3715 13.358 19.8837 15.58 16.842 18.485C13.5272 21.6632 11.0866 25.3515 9.52026 29.5678C7.95391 33.7842 7.41662 38.1463 7.89927 42.6541C8.38192 47.1619 9.91185 51.3783 12.489 55.2942C15.0662 59.119 18.3811 62.2244 22.4335 64.6195C26.5315 67.1511 31.0211 68.6719 35.9023 69.1728C39.1716 69.4915 42.4136 69.3822 45.6373 68.8267C48.8611 68.2712 51.9209 67.2604 54.8169 65.7851C55.6456 65.3207 56.5562 65.0475 57.5489 64.9564C58.5415 64.8653 59.4886 64.9746 60.4175 65.3025L71.6733 68.9633L68.0124 56.8788C67.7848 56.0956 67.7028 55.3033 67.7665 54.4928C67.8394 53.6914 68.0762 52.9174 68.4951 52.1797C69.8246 49.4659 70.7262 46.6064 71.1907 43.6195C71.646 40.6234 71.6278 37.6364 71.1178 34.6403C70.3801 30.2235 68.6317 26.1437 65.8724 22.4191C63.1586 18.8311 59.7709 15.9078 55.7184 13.6494C51.5293 11.3454 47.0671 10.0158 42.3225 9.64243C41.7215 9.55136 40.829 9.50583 39.6269 9.50583Z" fill="#6D7C99" />
                          <path d="M71.1347 70.8383C70.7873 70.8383 70.5331 70.7959 70.3636 70.7112L57.8979 66.6605C57.042 66.3639 56.2454 66.4232 55.5167 66.8554C52.5168 68.3977 49.3474 69.4655 46.0085 70.0672C42.6697 70.6688 39.28 70.796 35.8564 70.457C30.8057 69.94 26.111 68.3808 21.7806 65.7622C17.5858 63.2369 14.1538 59.9828 11.5013 55.9914C8.8065 51.9237 7.20487 47.5341 6.68794 42.8224C6.17101 38.1107 6.72183 33.56 8.32347 29.1703C9.93358 24.7806 12.4674 20.9333 15.9418 17.6368C19.4078 14.3403 23.45 11.8828 28.0516 10.2812C32.6616 8.67105 37.441 8.0609 42.4154 8.44224C47.3814 8.82358 52.0337 10.2218 56.3556 12.6201C60.5927 14.9335 64.1096 17.9927 66.8976 21.8062C69.8127 25.662 71.6517 29.8991 72.4228 34.5261C72.9398 37.6531 72.9652 40.7716 72.516 43.8732C72.0669 46.9832 71.1093 49.9492 69.6602 52.7712C69.2704 53.5 69.2111 54.161 69.4653 54.7626L73.4482 68.0672C73.5329 68.4909 73.516 68.9062 73.3804 69.2875C73.2533 69.6689 73.033 69.9909 72.7364 70.2536C72.3042 70.6434 71.7703 70.8298 71.1263 70.8298L71.1347 70.8383ZM39.6528 11.5947C35.6699 11.5947 31.848 12.315 28.1871 13.7471C24.5263 15.1793 21.2806 17.247 18.4502 19.9503C15.3656 22.9078 13.0945 26.3399 11.6369 30.2635C10.1793 34.1871 9.67935 38.2463 10.1285 42.441C10.5776 46.6358 12.0013 50.5594 14.3995 54.2033C16.7977 57.7625 19.8824 60.6522 23.6534 62.881C27.4668 65.2368 31.6446 66.652 36.1869 67.1181C39.2291 67.4147 42.246 67.313 45.2458 66.7961C48.2457 66.2792 51.0931 65.3385 53.7879 63.9657C54.5591 63.5335 55.4065 63.2793 56.3302 63.1945C57.2539 63.1098 58.1352 63.2115 58.9996 63.5166L69.4738 66.9232L66.0671 55.6778C65.8553 54.9491 65.779 54.2118 65.8383 53.4576C65.9061 52.7119 66.1264 51.9915 66.5163 51.3051C67.7535 48.7798 68.5924 46.1189 69.0246 43.3393C69.4483 40.5513 69.4314 37.7717 68.9568 34.9837C68.2704 30.8736 66.6434 27.0772 64.0757 23.6112C61.5503 20.2723 58.3979 17.5521 54.6269 15.4505C50.7287 13.3065 46.5763 12.0692 42.1612 11.7218C41.6019 11.637 40.7714 11.5947 39.6528 11.5947Z" fill="#6D7C99" />
                        </svg>
                        <p style={{ margin: 0, color: "#6D7C99", fontSize: 34, fontWeight: 500, paddingLeft: 10 }}>Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", padding: "40px" }}>
                  <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                  <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", flexGrow: "1" }}>Write a comment</p>
                </div>
              </Body>
            </Holder>

            <Holder shotWidth={1242} shotHeight={2208} themeColour={themeColour} lightMode={lightMode} appName={appName} deviceWidth={1242} tablet={true} displayText="Search for and find
the information you need" imageName="android-tablet-display-4" background="top" marginOffset={"auto"}>
              <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                  <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                  <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                  }</p>
                </div>
                <div style={{ padding: "12px 1rem 0px" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <Body compact={true}>
                <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
              </Body>
            </Holder>
          </div>

        </div>
      </div>
    </div>


  );
}

export default App;
