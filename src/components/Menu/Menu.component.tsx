import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
    Box,
    Chip,
    Collapse,
    Divider,
    List,
    ListItemText,
    useTheme,
} from '@mui/material';

import { StyledListItemButton } from './Menu.styles';
import { MenuProps } from './Menu.types';

export const Menu = ({ Config }: MenuProps) => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleClick = (key: string, hasChildren?: number, route?: string) => {
        if (hasChildren) {
            setOpenKeys((prev) =>
                prev.includes(key)
                    ? prev.filter((k) => k !== key)
                    : [...prev, key],
            );
        }

        if (route) {
            void navigate(route);
        }
    };

    const RecursiveMenuItems = (
        items: MenuProps['Config'][number],
        prefix = '',
    ) =>
        items.map((item, index) => {
            const key = `${prefix} - ${index}`;
            const hasChildren = item.children?.length;
            const isOpen = openKeys.includes(key);

            return (
                <React.Fragment key={key}>
                    <StyledListItemButton
                        onClick={() =>
                            handleClick(key, hasChildren, item.route)
                        }
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

                    {hasChildren && (
                        <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <List
                                component="div"
                                disablePadding
                                sx={{ ml: theme.spacing(14) }}
                            >
                                {item.children &&
                                    RecursiveMenuItems(item.children, key)}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            );
        });

    return (
        <List component="nav" aria-labelledby="nested-list-subheader">
            {Config.map((section, sectionIndex) => (
                <Box key={sectionIndex}>
                    {sectionIndex > 0 && <Divider />}
                    {RecursiveMenuItems(section, `s${sectionIndex}`)}
                </Box>
            ))}
        </List>
    );
};
