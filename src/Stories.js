import React from "react";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  //console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, url, num_comments, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author}</span> | {num_comments} comments
            </p>
            <div>
              <a href={url} className="reak-link">
                read more
              </a>
              <button
                onClick={() => removeStory(objectID)}
                className="remove-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
