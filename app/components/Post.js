import React from "react";
import { Link } from "react-router-dom";

export default function Post({ by, id, time, url, title, descendants }) {
  return (
    <div>
      <h1>
        <a target="_blank" href={url}>
          {title}
        </a>
      </h1>
      <p>
        By <Link to={`/user?id=${by}`}>{by}</Link>, with{" "}
        <Link to={`post?id=${id}`}>{descendants} comments</Link>
      </p>
    </div>
  );
}
