import React from 'react';
import { Button } from '.';
type ClearButtonProps = {
  title: string;
  func: () => void;
};
const ClearButton: React.FC<ClearButtonProps> = ({ title, func }) => {
  return <Button onClick={func}>{title}</Button>;
};

export default ClearButton;
