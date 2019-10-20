import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  console.log(storyId);

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    //if we get data, && we have a data.url, we will setStory with data
  }, []);

  return story && story.url ? (
    <div>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      By: <p>{story.by}</p>
      Posted: <p>{story.time}</p>
    </div>
  ) : null;
};
