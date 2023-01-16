import { createContext, useState } from 'react';
import { BaseLayoutProps, TargetUserType } from '../types/Types';

export const TargetUserContext = createContext<TargetUserType>(
  {} as TargetUserType
);

export default function CurrentTargetUserContext({
  children,
}: BaseLayoutProps) {
  const [targetUser, setTargetUser] = useState('');

  return (
    <TargetUserContext.Provider value={{ targetUser, setTargetUser }}>
      {children}
    </TargetUserContext.Provider>
  );
}
