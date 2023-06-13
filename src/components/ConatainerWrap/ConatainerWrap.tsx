import React, { ReactNode } from 'react';

interface ContainerWrapProps {
  children: ReactNode;
}

export default function ConatainerWrap({ children }: ContainerWrapProps) {
  return (
    <div className="py-10 bg-white xl:w-[360px] h-fit xl:m-auto xl:shadow-xl xl:h-fit">
      {children}
    </div>
  );
}
