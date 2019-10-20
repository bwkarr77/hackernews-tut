import React, [useEffect, useState] from 'react';
import {getStoryIds} from '../services/hnApi';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    useEffect(() => {
      console.log("useEffect ran");
      getStoryIds().then(info => info && setStoryIds(info));
    //   storyIds $$ storyIds.
    }, []);
  
    return <p>{JSON.stringify(storyIds)}</p>;
}