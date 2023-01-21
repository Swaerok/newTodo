import React from 'react';
import { Button } from './styled';
interface ClearButtonProps {
  title: string;
  onClick: () => void;
}
const ClearButton: React.FC<ClearButtonProps> = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default ClearButton;
