import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { fetchUsersData } from '../../configs/api/FetchData';
import { SliderStatusContext } from '../../configs/context/ProjectContext';
import { TargetUserContext } from '../../configs/context/TargetUserContext';
import { User } from '../../configs/types/Types';

type Props = {
  user: User;
};

export default function UserData({ user }: Props) {
  const { isOpen, setIsOpen } = useContext(SliderStatusContext);
  const { setTargetUser } = useContext(TargetUserContext);

  const username = user.login;
  const { data: info } = useQuery({
    queryKey: ['users', username],
    queryFn: () => fetchUsersData(username),
    enabled: !!username,
  });

  function handleOpen(currentUser: string | undefined) {
    setIsOpen(!isOpen);
    setTargetUser(currentUser);
  }

  return (
    <>
      <div className="profile-avatar">
        <img
          className="mr-3 w-20 rounded-full"
          src={info?.avatar_url}
          alt={`${info?.name}'s Avatar`}
        />
      </div>
      <div className="profile-info flex flex-col justify-items-center min-h-full">
        <h2 className="text-xl font-bold group-hover:text-white">
          {info?.name}
        </h2>
        <div className="account-details flex ">
          <a
            href={info?.html_url}
            className="flex items-center italic  hover:text-emerald-500 group-hover:text-white group-hover:hover:text-gray-800"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 ml-2"
                stroke="currentColor"
              >
                <path
                  d="M12 21.9991C10.5991 22.0005 9.2133 21.71 7.93096 21.1461C6.44975 20.4876 5.15079 19.479 4.14599 18.207C3.14118 16.9351 2.46063 15.4379 2.16297 13.8445C1.86531 12.2511 1.95945 10.6093 2.43729 9.06032C2.91514 7.51139 3.76235 6.10183 4.90596 4.95306C5.83276 4.01394 6.93748 3.26901 8.15553 2.7618C9.37359 2.25459 10.6805 1.99529 12 1.99906C12.316 1.99906 12.637 2.01406 12.953 2.04406C15.4512 2.32625 17.757 3.52195 19.427 5.4013C21.097 7.28064 22.0134 9.71097 22 12.2251V12.8991C22 13.8757 21.6139 14.8127 20.9258 15.5059C20.2378 16.199 19.3036 16.5919 18.327 16.5991C18.263 16.5991 18.198 16.5991 18.134 16.5941C17.5677 16.5611 17.017 16.396 16.526 16.1121C16.0349 15.8282 15.6171 15.4333 15.306 14.9591C14.705 15.8047 13.8605 16.4469 12.8851 16.8001C11.9097 17.1533 10.8497 17.2007 9.8467 16.9358C8.84368 16.671 7.94528 16.1065 7.27138 15.3178C6.59748 14.5291 6.18012 13.5537 6.075 12.5216C5.96988 11.4895 6.182 10.45 6.68304 9.54159C7.18409 8.63321 7.95024 7.89924 8.87927 7.4376C9.80829 6.97596 10.856 6.80861 11.8826 6.95789C12.9092 7.10716 13.8659 7.56596 14.625 8.27306C14.6522 8.03322 14.7665 7.81172 14.9462 7.6506C15.1259 7.48949 15.3586 7.39998 15.6 7.39906C15.8652 7.39906 16.1195 7.50442 16.3071 7.69196C16.4946 7.87949 16.6 8.13385 16.6 8.39906V12.7231C16.5824 13.1831 16.7401 13.6326 17.0411 13.9808C17.3422 14.329 17.7643 14.55 18.222 14.5991H18.297C18.5205 14.5995 18.7418 14.5558 18.9484 14.4705C19.155 14.3853 19.3428 14.2601 19.501 14.1022C19.6592 13.9443 19.7846 13.7568 19.8703 13.5503C19.9559 13.3439 20 13.1226 20 12.8991V12.2241C20.0169 10.2076 19.2879 8.25598 17.9532 6.74438C16.6184 5.23278 14.772 4.26785 12.769 4.03506C12.515 4.01206 12.257 3.99906 12 3.99906C10.8794 3.99866 9.77123 4.23368 8.74729 4.68888C7.72334 5.14409 6.80644 5.80933 6.056 6.64151C5.30556 7.47369 4.73832 8.45424 4.39102 9.51963C4.04373 10.585 3.92412 11.7115 4.03996 12.8261C4.18926 14.2397 4.71209 15.5881 5.55477 16.7328C6.39745 17.8776 7.52962 18.7774 8.83503 19.34C10.1404 19.9025 11.572 20.1075 12.9829 19.9339C14.3937 19.7603 15.7329 19.2143 16.863 18.3521C16.9672 18.2722 17.0862 18.2137 17.2131 18.1798C17.34 18.146 17.4723 18.1374 17.6025 18.1547C17.7327 18.172 17.8582 18.2147 17.9718 18.2805C18.0855 18.3463 18.1851 18.4338 18.265 18.5381C18.3448 18.6423 18.4033 18.7613 18.4372 18.8882C18.4711 19.0151 18.4796 19.1474 18.4623 19.2776C18.4451 19.4078 18.4023 19.5333 18.3365 19.647C18.2708 19.7606 18.1832 19.8602 18.079 19.9401C16.332 21.2721 14.1968 21.9953 12 21.9991ZM11.182 8.90806C10.5706 8.90787 9.97286 9.08898 9.46442 9.42851C8.95598 9.76803 8.55964 10.2507 8.32554 10.8155C8.09143 11.3803 8.03008 12.0018 8.14923 12.6015C8.26839 13.2011 8.5627 13.752 8.99494 14.1844C9.42718 14.6168 9.97795 14.9113 10.5776 15.0306C11.1772 15.1499 11.7987 15.0888 12.3636 14.8549C12.9285 14.621 13.4113 14.2248 13.751 13.7164C14.0907 13.2081 14.272 12.6104 14.272 11.9991C14.2709 11.1798 13.945 10.3943 13.3658 9.81492C12.7866 9.2355 12.0012 8.90939 11.182 8.90806V8.90806Z"
                  fill="black"
                />
              </svg>
            </span>
            {info?.login}
          </a>
          <a
            href={info?.blog}
            className="flex items-center italic ml-2 hover:text-emerald-500 group-hover:text-white group-hover:hover:text-gray-800"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link w-4 ml-2 mr-1"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            {info?.blog}
          </a>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm text-gray-500 group-hover:text-gray-200">
              followers
            </span>
            <span className="badge bg-teal-500 text-white border-none group-hover:bg-white group-hover:text-gray-800 group-hover:border-2 ">
              {info?.followers}
            </span>
          </div>
          <div className="divider divider-horizontal mr-0 ml-0"></div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm text-gray-500 group-hover:text-gray-200">
              following
            </span>
            <span className="badge bg-emerald-600 text-white border-none group-hover:bg-white group-hover:text-gray-800 group-hover:border-2">
              {info?.following}
            </span>
          </div>
          <div className="divider divider-horizontal mr-0 ml-0"></div>
          <div className="flex flex-col justify-center  items-center">
            <span className="text-sm text-gray-500 group-hover:text-gray-200">
              repos
            </span>
            <span className="badge badge-neutral text-white border-none group-hover:bg-white group-hover:text-gray-800 group-hover:border-2">
              {info?.public_repos}
            </span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleOpen(info?.login)}
        className="absolute group-hover:bg-white group-hover:hover:bg-gray-800 right-5 bottom-1/4 btn btn-outline "
      >
        Open
      </button>
    </>
  );
}
