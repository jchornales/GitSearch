import { User } from '../../configs/types/Types';
import UserData from '../UserData';

type Props = {
  inputValue: string;
  users?: User[];
};

export default function UsersList({ inputValue, users }: Props): JSX.Element {
  let filteredData: User[] = [];

  if (users && inputValue) {
    filteredData = users.filter((user) => user.login.includes(inputValue));
    if (filteredData.length === 0) {
      return (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              The username you entered does not exist. Please try again or
              <a
                className="ml-1 underline hover:text-white"
                href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
              >
                create a new account
              </a>
              .
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="users-list mt-20 max-h-400 overflow-hidden hover:overflow-y-scroll">
          {filteredData.map((user) => {
            return (
              <li
                className="relative group hover:bg-emerald-600 border-2 border-gray mt-2 mb-2 flex p-3"
                key={user.id}
              >
                <UserData user={user} />
              </li>
            );
          })}
        </ul>
      );
    }
  } else {
    return <></>;
  }
}
