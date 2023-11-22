import FeedMag from "./ListLayouts/FeedMag";
import Gallery from "./ListLayouts/Gallery";
import Headline from "./ListLayouts/Headline";
import Letterbox from "./ListLayouts/Letterbox";
import MediumList from "./ListLayouts/MediumList";
import MiniPolaroid from "./ListLayouts/MiniPolaroid";
import Polaroid from "./ListLayouts/Polaroid";
import SmallList from "./ListLayouts/SmallLiist";
import TwoColList from "./ListLayouts/TwoColList";

export default function Tiles({ listLayout, gradients, showIcons, displayDates, tablet, listimage1, featuredTile1Title, listimage2, featuredTile2Title, listimage3, featuredTile3Title, listimage4, featuredTile4Title, listimage5, featuredTile5Title, listimage6, featuredTile6Title }) {

    let listContent = '';

    //           <option value="smallList">Small List</option>
    //           <option value="mediumList">Medium List</option>
    //           <option value="2columnList">2 Column List</option>
    //           <option value="polaroid">Polaroid</option>
    //           <option value="miniPolaroid">Mini Polaroid</option>
    //           <option value="gallery">Gallery</option>
    //           <option value="letterbox">Letterbox</option>
    //           <option value="headline">Headline</option>
    //           <option value="feedMag">Feed Mag</option>

    switch (listLayout) {
        case 'smallList':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <SmallList image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <SmallList image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <SmallList image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <SmallList image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <SmallList image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <SmallList image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        case 'mediumList':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <MediumList image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <MediumList image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <MediumList image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <MediumList image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <MediumList image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <MediumList image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        case '2columnList':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage1" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <TwoColList image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage2" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <TwoColList image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage3" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <TwoColList image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage4" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <TwoColList image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage5" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <TwoColList image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage6" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <TwoColList image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                </>
            )
        case 'polaroid':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <Polaroid image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Polaroid image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Polaroid image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Polaroid image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Polaroid image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Polaroid image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        case 'miniPolaroid':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage1" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <MiniPolaroid image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage2" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <MiniPolaroid image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage3" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <MiniPolaroid image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage4" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <MiniPolaroid image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage5" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                            <MiniPolaroid image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage6" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                            <MiniPolaroid image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                </>
            )
        case 'gallery':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage1" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box" }}>
                            <Gallery image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage2" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box", marginRight: "3%", marginLeft: "3%" }}>
                            <Gallery image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage3" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box" }}>
                            <Gallery image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                    <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <label htmlFor="listImage4" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box" }}>
                            <Gallery image={listimage4} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage5" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box", marginRight: "3%", marginLeft: "3%" }}>
                            <Gallery image={listimage5} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                        <label htmlFor="listImage6" style={{ maxWidth: "31%", minWidth: "31%", boxSizing: "border-box" }}>
                            <Gallery image={listimage6} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        </label>
                    </div>
                </>
            )
        case 'letterbox':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <Letterbox image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Letterbox image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Letterbox image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Letterbox image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Letterbox image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Letterbox image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        case 'headline':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <Headline image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Headline image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Headline image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Headline image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Headline image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <Headline image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        case 'feedMag':
            return (
                listContent = <>
                    <div className="featured-tiles" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                        <FeedMag image={listimage1} title={featuredTile1Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <FeedMag image={listimage2} title={featuredTile2Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <FeedMag image={listimage3} title={featuredTile3Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <FeedMag image={listimage4} title={featuredTile4Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <FeedMag image={listimage5} title={featuredTile5Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                        <FeedMag image={listimage6} title={featuredTile6Title} gradients={gradients} showIcons={showIcons} displayDates={displayDates} tablet={tablet} />
                    </div>
                </>
            )
        default:
            return
            (
                <><p>Nothing Found</p></>
            )
    }

    return (

        listContent

    );
} 