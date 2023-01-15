export type BaseLayoutProps = {
  children?: React.ReactNode;
};

export type User = {
  login: string;
  id: number;
};

export type UserData = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};
