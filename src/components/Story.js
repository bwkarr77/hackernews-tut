import React, { useEffect, useState, memo } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  console.log(storyId);

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    //if we get data, && we have a data.url, we will setStory with data
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000"> Posted: </StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
