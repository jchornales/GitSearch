import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { fetchUser } from '../../configs/api/FetchData';
import { SliderStatusContext } from '../../configs/context/ProjectContext';
import UsersList from '../UsersList';

export default function SearchBar() {
  const { isOpen } = useContext(SliderStatusContext);
  const [inputValue, setInputValue] = useState('');
  const { data: users, refetch } = useQuery(['users'], fetchUser);

  return (
    <form
      className={`absolute form-control flex flex-column justify-center align-center w-1/2 min-h-screen delay-150 ${
        isOpen ? 'left-1/3' : 'left-1/2'
      } -translate-x-1/2`}
    >
      <div
        className={`input-group absolute duration-500 focus-within:top-20 ${
          !inputValue ? 'top-1/2' : 'top-20'
        }`}
      >
        <input
          type="text"
          placeholder="Search…"
          className="input w-full input-bordered border-2 focus:outline-0 focus:border-emerald-500 hover:border-emerald-500 duration-300"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <span className="btn-square bg-emerald-500 hover:bg-emerald-500 cursor-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <UsersList inputValue={inputValue} users={users} />
    </form>
  );
}
