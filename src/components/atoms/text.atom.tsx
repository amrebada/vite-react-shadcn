import * as React from "react";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "inline-code"
  | "lead"
  | "large"
  | "small"
  | "muted";

interface TextProps
  extends React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  > {
  variant?: TextVariant;
  className?: string;
}
export const Text: React.FunctionComponent<TextProps> = ({
  variant = "p",
  children,
  className = "",
  ...props
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          {...props}
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          {...props}
          className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          {...props}
          className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          {...props}
          className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
        >
          {children}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote
          {...(props as Record<string, unknown>)}
          className={`mt-6 border-l-2 pl-6 italic ${className}`}
        >
          {children}
        </blockquote>
      );
    case "inline-code":
      return (
        <code
          {...props}
          className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
        >
          {children}
        </code>
      );
    case "lead":
      return (
        <p {...props} className={`text-xl text-muted-foreground ${className}`}>
          {children}
        </p>
      );
    case "large":
      return (
        <p {...props} className={`text-lg font-semibold ${className}`}>
          {children}
        </p>
      );
    case "small":
      return (
        <p
          {...props}
          className={`text-sm font-medium leading-none ${className}`}
        >
          {children}
        </p>
      );
    case "muted":
      return (
        <p {...props} className={`text-sm text-muted-foreground ${className}`}>
          {children}
        </p>
      );
    case "p":
    default:
      return (
        <p
          {...props}
          className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
        >
          {children}
        </p>
      );
  }
};
