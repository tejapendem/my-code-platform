import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className,
  variant = "default",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 dark:bg-transparent dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800",
    ghost:
      "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        "px-4 py-2 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
