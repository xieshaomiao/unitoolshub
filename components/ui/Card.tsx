import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export default function Card({
  hover = true,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`card ${hover ? "card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}