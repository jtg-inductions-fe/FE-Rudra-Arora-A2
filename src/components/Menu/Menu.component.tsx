import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
    Chip,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemText,
    useTheme,
} from '@mui/material';

import { StyledListItemButton } from './Menu.styles';
import { MenuProps, RecursiveMenuProps } from './Menu.types';

export const Menu = ({ config, handleDrawerClose }: MenuProps) => {
    /**
     * State for handling nested submenu
     */
    const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

    const theme = useTheme();
    const location = useLocation();

    const handleClick = (key: string) => {
        setOpenKeys((prev) => {
            const temp = new Set(prev);
            if (temp.has(key)) {
                temp.delete(key);
            } else {
                temp.add(key);
            }
            return temp;
        });
    };

    /**
     *
     * Recursive JSX component for handling nested list
     * @returns JSX component
     */
    const RecursiveMenuItems = ({ items, prefix }: RecursiveMenuProps) =>
        items.map((item, index) => {
            const key = `${prefix} - ${index}`;
            const hasChildren = item.children?.length;
            const isOpen = openKeys.has(key);
            const isActive = location.pathname === item.route;

            return (
                <React.Fragment key={key}>
                    <ListItem disablePadding>
                        <StyledListItemButton
                            component={hasChildren ? 'button' : Link}
                            {...(hasChildren
                                ? { onClick: () => handleClick(key) }
                                : {
                                      to: item.route,
                                      onClick: () => handleDrawerClose(),
                                  })}
                            sx={{
                                color: isActive
                                    ? theme.palette.primary.main
                                    : theme.palette.common.black,
                            }}
                        >
                            {item.icon && <item.icon />}

                            <ListItemText primary={item.title} />
                            {hasChildren &&
                                (isOpen ? <ExpandLess /> : <ExpandMore />)}

                            {item.count && (
                                <Chip
                                    label={item.count}
                                    color="error"
                                    size="small"
                                />
                            )}
                        </StyledListItemButton>
                    </ListItem>

                    {hasChildren && (
                        <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <List
                                component="div"
                                disablePadding
                                sx={{ ml: theme.spacing(10) }}
                            >
                                {item.children && (
                                    <RecursiveMenuItems
                                        items={item.children}
                                        prefix={key}
                                    />
                                )}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            );
        });

    return (
        <List aria-label="nested-list-sidebar">
            {config.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                    {sectionIndex > 0 && <Divider />}
                    {
                        <RecursiveMenuItems
                            items={section}
                            prefix={`s${sectionIndex}`}
                        />
                    }
                </React.Fragment>
            ))}
        </List>
    );
};
