import React, { useState, useEffect } from "react";
import queryString from "query-string";

import { fetchUser } from "../utils/api";
import { formatDate } from "../utils/helpers";

export default function User({ location }) {
  const [user, setUser] = useState(null);
  const { search } = location;
  const { id } = queryString.parse(search);

  useEffect(() => {
    fetchUser(id).then((user) => {
      setUser(user);
    });
  }, [id]);

  if (user) {
    return (
      <div>
        <h1>{user.id}</h1>
        <h3>{formatDate(user.created)}</h3>
        <p dangerouslySetInnerHTML={{__html: user.about}} />
      </div>
    );
  }
  return null;
}
