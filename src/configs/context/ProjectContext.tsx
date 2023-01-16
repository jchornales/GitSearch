import { createContext, useState } from 'react';
import { BaseLayoutProps, SliderStatusType } from '../types/Types';

export const SliderStatusContext = createContext<SliderStatusType>(
  {} as SliderStatusType
);

export default function ProjectContext({ children }: BaseLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SliderStatusContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SliderStatusContext.Provider>
  );
}
