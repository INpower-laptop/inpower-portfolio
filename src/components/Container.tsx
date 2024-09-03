import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container px-8 pt-16 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

