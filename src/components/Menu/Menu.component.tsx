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
} from '@mui/material';

import { StyledListItemButton } from './Menu.styles';
import { MenuProps } from './Menu.types';

export const Menu = ({ Config }: MenuProps) => {
    const [openIndex, setOpenIndex] = useState<number[]>([]);
    const navigate = useNavigate();

    const handleClick = (
        index: number,
        hasChildren?: number,
        route?: string,
    ) => {
        if (hasChildren) {
            if (openIndex.includes(index)) {
                setOpenIndex((prev) => prev.filter((i) => i !== index));
            } else {
                setOpenIndex((prev) => [...prev, index]);
            }
        }

        if (route) {
            void navigate(route);
        }
    };

    const RecursiveMenuItems = (items: MenuProps['Config'][number]) =>
        items.map((item, index) => {
            const hasChildren = item.children?.length;
            const isOpen = openIndex.includes(index);

            return (
                <React.Fragment key={index}>
                    <StyledListItemButton
                        onClick={() =>
                            handleClick(index, hasChildren, item.route)
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
                                sx={{ ml: 14 }}
                            >
                                {item.children &&
                                    RecursiveMenuItems(item.children)}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            );
        });

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {Config.map((section, sectionIndex) => (
                <Box key={sectionIndex}>
                    {sectionIndex > 0 && <Divider />}
                    {RecursiveMenuItems(section)}
                </Box>
            ))}
        </List>
    );
};
