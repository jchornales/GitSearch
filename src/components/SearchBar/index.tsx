import { useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { fetchUser } from '../../configs/api/FetchData';
import UsersList from '../UsersList';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const { data: users, refetch } = useQuery(['users'], fetchUser);

  function handleInput(event: FormEvent) {
    event.preventDefault();
    refetch;
  }

  return (
    <form
      onSubmit={handleInput}
      className="form-control flex flex-column justify-center align-center m-auto w-1/2 min-h-screen"
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input w-full input-bordered border-2 focus:outline-0 focus:border-emerald-500 hover:border-emerald-500"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-square bg-emerald-500 hover:bg-emerald-500 cursor-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
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
      <UsersList inputValue={inputValue} users={users} />
    </form>
  );
}
