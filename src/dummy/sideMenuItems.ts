import React from 'react';
import { Folder, Home, InsertDriveFile } from '@mui/icons-material';

interface MenuItem {
  name: string;
  icon?: React.ReactElement;
}

interface ChildMenuItem extends MenuItem {
  key: number;
}

interface DropdownMenuItem extends MenuItem {
  children: Array<ChildMenuItem>;
}

export const menuItems: Array<MenuItem | DropdownMenuItem> = [
    {
      name: 'Menu Item 1',
      icon: React.createElement(Home),
    },
    {
      name: 'Menu Item 2',
      icon: React.createElement(Home),
    },
    {
      name: 'Dropdown Menu',
      children: [
        {
          name: 'Dropdown Item 1',
          icon: React.createElement(Folder),
          key: 10,
        },
        {
          name: 'Dropdown Item 2',
          icon: React.createElement(InsertDriveFile),
          key: 11,
        },
      ],
    },
    {
      name: 'Dropdown Menu 2',
      children: [
        {
          name: 'Dropdown Item 1',
          icon: React.createElement(Folder),
          key: 13,
        },
        {
          name: 'Dropdown Item 2',
          icon: React.createElement(InsertDriveFile),
          key: 14,
        },
      ],
    },
    {
      name: 'Dropdown Menu 3',
      children: [
        {
          name: 'Dropdown Item 1',
          icon: React.createElement(Folder),
          key: 15,
        },
        {
          name: 'Dropdown Item 2',
          icon: React.createElement(InsertDriveFile),
          key: 16,
        },
      ],
    },
    {
        name: 'Menu Item 6',
        icon: React.createElement(Home),
      },
  ];