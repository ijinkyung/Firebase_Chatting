import React, { ReactNode } from 'react';

interface ContainerWrapProps {
  children: ReactNode;
}

export default function ConatainerWrap({ children }: ContainerWrapProps) {
  return (
    <div className="py-10 bg-white xl:w-[360px] xl:m-auto xl:shadow-xl ">
      {children}
    </div>
  );
}
