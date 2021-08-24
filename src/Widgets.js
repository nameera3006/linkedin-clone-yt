import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_articles">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkdeIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("we are back with full strength", "Top news -999 readers")}
            {newsArticle("we are back with full strength", "Top news -999 readers")}
            {newsArticle("we are back with full strength", "Top news -999 readers")}
            {newsArticle("we are back with full strength", "Top news -999 readers")}

        </div>
    );
}

export default Widgets
