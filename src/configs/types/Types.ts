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

export type ReposData = {
  login: string;
  id: number;
  name: string;
  full_name: string;
  html_url: string;
};

export type SliderStatusType = {
  isOpen: boolean;
  setIsOpen: any;
};

export type TargetUserType = {
  targetUser: any;
  setTargetUser: any;
};
