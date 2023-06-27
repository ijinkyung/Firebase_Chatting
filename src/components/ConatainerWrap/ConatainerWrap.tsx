import React, { ReactNode } from 'react';

type ContainerWrapProps = {
  children: ReactNode;
};

export default function ConatainerWrap({ children }: ContainerWrapProps) {
  return (
    <div className="bg-white h-[600px] border-solid border-2 border-black rounded-lg xl:h-[700px] overflow-scroll">
      {children}
    </div>
  );
}
