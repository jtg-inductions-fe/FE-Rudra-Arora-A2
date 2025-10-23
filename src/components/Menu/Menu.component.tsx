import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
    Box,
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

export const Menu = ({ config }: MenuProps) => {
    /**
     * State for handling nested submenu
     */
    const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());
    const theme = useTheme();

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

            return (
                <React.Fragment key={key}>
                    <ListItem disablePadding>
                        <StyledListItemButton
                            component={hasChildren ? 'button' : Link}
                            {...(hasChildren
                                ? { onClick: () => handleClick(key) }
                                : { to: item.route })}
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
                <Box key={sectionIndex}>
                    {sectionIndex > 0 && <Divider />}
                    {
                        <RecursiveMenuItems
                            items={section}
                            prefix={`s${sectionIndex}`}
                        />
                    }
                </Box>
            ))}
        </List>
    );
};
