import React, { useState } from "react";

import "./Search.scss";

export const Search = () => {
    const [search, setSearch] = useState('');

    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
      setSearch(e.currentTarget.value);

    };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        value={search}
        onChange={handleInput}
      />
    </form>
  );
};
