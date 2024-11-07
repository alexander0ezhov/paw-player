import React from "react";

interface IFilesSectionProps extends React.ComponentProps<"div"> {
  getFiles: () => void;
  getDirectory: () => void;
}
