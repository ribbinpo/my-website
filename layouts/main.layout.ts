import type { ReactElement } from 'react'

interface IMainLayout {
  children: ReactElement;
}

const MainLayout = ({ children }: IMainLayout) => {
  return {children};
};

export default MainLayout;