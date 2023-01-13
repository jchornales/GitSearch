import { ChangeEvent, useState } from 'react';
import GetProjects from '../ProjectList';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="form-control flex flex-column justify-center align-center m-auto w-1/2 min-h-screen">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input w-full input-bordered border-2 focus:outline-0 focus:border-emerald"
          onChange={handleInput}
        />
        <button className="btn btn-square bg-emerald">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <GetProjects inputValue={inputValue} />
    </div>
  );
}
