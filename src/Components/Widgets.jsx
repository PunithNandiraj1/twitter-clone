  
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1299469376656211968"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="punithnandiraj"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/PolestarCars/status/1321391021649989633"}
          options={{ text: "Polestar is amazing", via: "punithnandiraj" }}
        />
      </div>
    </div>
  );
}

export default Widgets;