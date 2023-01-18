import React from 'react';
import { GrCatalogOption } from 'react-icons/gr';
import { BiLogOutCircle } from 'react-icons/bi';
import { HeaderBar, HeaderIcon } from '.';

const Head: React.FC = () => {
  return (
    <HeaderBar>
      <HeaderIcon>
        <GrCatalogOption />
      </HeaderIcon>
      <h1>To-do List</h1>
      <HeaderIcon>
        <BiLogOutCircle />
      </HeaderIcon>
    </HeaderBar>
  );
};

export default Head;
