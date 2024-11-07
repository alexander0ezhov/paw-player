import React from "react";
import cn from "classnames";
import Button from "@components/common/Button";
import { Files, Add } from "@assets/icons";
import s from "./index.module.scss";
import { IFilesSectionProps } from "./types";

const File = () => <Add height="1rem" width="1rem" />;
const Dir = () => <Files height="1rem" width="1rem" />;

const FilesSection: React.FC<IFilesSectionProps> = ({
  className,
  getFiles,
  getDirectory,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <span className={s.description}>
        Add files "<File />" or choose directory "<Dir />" to upload music
      </span>
      <span className={s.buttons}>
        <Button attach="right" onClick={getFiles}>
          <File />
        </Button>
        <Button attach="left" onClick={getDirectory}>
          <Dir />
        </Button>
      </span>
    </div>
  );
};

export default FilesSection;
