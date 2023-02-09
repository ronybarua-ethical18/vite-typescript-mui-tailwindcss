import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { menuItems } from '../dummy/sideMenuItems';
import TestMuiComponent from './TestMuiComponent';
function Sidebar():JSX.Element {

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number |  null>(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState(0)
  const [itemIndex, setItemIndex] = useState<number | null>(null)

  const handleClick = () => {
    setOpen(!open)
  };

  const handleMenuItemClick = (index:number|null):void   => {
    setSelectedIndex(index);
  };

  const handleSubMenuItemClick = (index:number):void => {
    setSelectedSubMenu(index)
  }

  return (
    <div>
      <Drawer variant="permanent" anchor="left" >
        <List>
          {menuItems.map((menuItem:any, index:number) =>
            menuItem.children ? (
              <div key={menuItem.name}>
                <ListItemButton
                  onClick={(event) => {
                    handleClick()
                    setItemIndex(itemIndex === index ? null : index)
                    handleMenuItemClick(null)
                  }}
                  className="text-blue-600"
                  selected={selectedIndex === index}
                  style={{ backgroundColor: selectedIndex === index ? '#eee' : 'white' }}
                >
                  <ListItemIcon>{menuItem.icon} </ListItemIcon>
                  < ListItemText primary={menuItem.name} />
                </ListItemButton>
                < Collapse in={itemIndex === index} timeout="auto" unmountOnExit >
                  <List component="div" disablePadding >
                    {
                      menuItem.children.map((child:any, cindex:number) => (
                        <ListItemButton
                          key={child.name}
                          onClick={(event) => {
                            handleSubMenuItemClick(child.key)
                            handleMenuItemClick(null)
                          }}
                          selected={selectedSubMenu === child.key}
                          style={{ backgroundColor: selectedSubMenu === child.key ? '#eee' : 'white' }}
                        >
                          <ListItemIcon className="">{child.icon} </ListItemIcon>
                          < ListItemText primary={child.name} className="text-green-600" />
                        </ListItemButton>
                      ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton
                key={menuItem.name}
                className="bg-purple-600"
                onClick={(event) => handleMenuItemClick(index)}
                selected={selectedIndex === index}
                style={{ backgroundColor: selectedIndex === index ? '#eee' : 'white' }}
              >
               
                <ListItemIcon>{menuItem.icon} </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>))}
        </List>
      </Drawer>
      <TestMuiComponent />
    </div>
  );
}

export default Sidebar;
