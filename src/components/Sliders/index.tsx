import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { fetchUserRepos } from '../../configs/api/FetchData';
import { SliderStatusContext } from '../../configs/context/ProjectContext';
import { TargetUserContext } from '../../configs/context/TargetUserContext';

export default function Sliders() {
  const { isOpen, setIsOpen } = useContext(SliderStatusContext);
  const { targetUser } = useContext(TargetUserContext);
  const { data: repos } = useQuery({
    queryKey: ['username', targetUser],
    queryFn: () => fetchUserRepos(targetUser),
    enabled: !!targetUser,
  });

  return (
    <>
      <div
        className={`absolute ${
          isOpen ? 'right-0' : '-right-full'
        } delay-150 duration-300 bg-white h-screen w-1/3 z-10`}
      >
        <div className="relative w-full h-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="absolute bg-white border-none -translate-x-full p-2"
          >
            <svg
              className="svg-icon w-8"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 844.8l358.4-358.4c12.8-12.8 25.6-12.8 38.4 0l6.4 6.4c12.8 12.8 12.8 25.6 0 38.4l-358.4 358.4c-12.8 12.8-25.6 12.8-38.4 0l-6.4-6.4C211.2 870.4 211.2 857.6 224 844.8z" />
              <path d="M582.4 537.6 224 179.2c-12.8-12.8-12.8-25.6 0-38.4l6.4-6.4c12.8-12.8 25.6-12.8 38.4 0l358.4 358.4c12.8 12.8 12.8 25.6 0 38.4L620.8 537.6C608 550.4 588.8 550.4 582.4 537.6z" />
              <path d="M422.4 844.8l358.4-358.4c12.8-12.8 25.6-12.8 38.4 0l6.4 6.4c12.8 12.8 12.8 25.6 0 38.4l-358.4 358.4c-12.8 12.8-25.6 12.8-38.4 0l-6.4-6.4C409.6 870.4 409.6 857.6 422.4 844.8z" />
              <path d="M780.8 537.6 422.4 179.2c-12.8-12.8-12.8-25.6 0-38.4l6.4-6.4c12.8-12.8 25.6-12.8 38.4 0l358.4 358.4c12.8 12.8 12.8 25.6 0 38.4l-6.4 6.4C806.4 550.4 793.6 550.4 780.8 537.6z" />
            </svg>
          </button>
          <ul>
            {repos?.map((repo) => {
              return <li key={repo.id}>{repo.full_name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div
        className={`fixed left-0 ${
          isOpen ? 'top-0' : '-top-full'
        } sliders w-full h-full bg-gray-800 opacity-30 z-0 duration-150`}
      ></div>
    </>
  );
}
