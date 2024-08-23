import React, { useEffect, useRef } from "react";

function PostFilter({ users, query, userId }) {
  const queryRef = useRef();
  const userIdRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  useEffect(() => {
    userIdRef.current.value = userId || "";
  }, [userId]);

  return (
    <>
      <form method="get" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userIdRef}>
              <option value="">Any</option>
              {users &&
                users.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}
                    // selected={user.id === post.userId ? "selected" : ""}
                  >
                    {user.name}
                  </option>
                ))}
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </form>
    </>
  );
}

export default PostFilter;
