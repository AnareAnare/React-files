import React from 'react';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { MenuButtonClose } from '../Buttons/MenuButtonClose';
import { MenuButtonComplain } from '../Buttons/MenuButtonComplain';
import { MenuButtonHide } from '../Buttons/MenuButtonHide';
import { SaveButton } from '../CardControls/Actions/SaveButton';
import { ShareButton } from '../CardControls/Actions/ShareButton';
import { CommentsButton } from '../CardControls/CommentsButton';
import { MenuButton } from '../MenuButton';
import styles from './carddropdownmenu.css';

const LIST = [
  { inner: <CommentsButton mobileDisplay/> },
  { inner: <ShareButton mobileDisplay /> },
  { inner: <MenuButtonHide /> },
  { inner: <SaveButton mobileDisplay/> },
  { inner: <MenuButtonComplain /> },
  { inner: <MenuButtonClose /> },
].map(generateId);

export function CardDropdownMenu() {
  return (
    <Dropdown button = { <MenuButton /> }>
      <ul>
        <GenericList list={LIST} />
      </ul>
    </Dropdown>
  );
}
