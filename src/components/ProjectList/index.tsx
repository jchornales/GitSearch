import { useQuery } from '@tanstack/react-query';

type User = {
  login: string;
  id: number;
  url: string;
  repos_url: string;
};

type Props = {
  inputValue?: string;
};

export default function GetProjects({ inputValue }: Props) {
  const { isLoading, isError, data } = useQuery(['users'], () =>
    fetch('https://api.github.com/users').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';
  if (isError) return 'An error has occured';

  const filteredData = data.filter((user: User) =>
    user.login.includes(`${inputValue}`)
  );

  if (inputValue) {
    return filteredData.map((user: User) => {
      return (
        <div key={user.id}>
          <h1>{user.login}</h1>
          <p>{user.id}</p>
        </div>
      );
    });
  }
}
