import React, { useState } from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { MenuProps } from './Menu.types';

export const Menu = ({ Config }: MenuProps) => {
    const [openIndex, setOpenIndex] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (openIndex.includes(index)) {
            setOpenIndex((prev) => prev.filter((i) => i !== index));
        } else {
            setOpenIndex((prev) => [...prev, index]);
        }
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {Config.map((section, sectionIndex) => (
                <Box key={sectionIndex}>
                    {sectionIndex > 0 && <Divider />}

                    {section.map((item, itemIndex) => {
                        const hasChildren = !!item.children?.length;
                        // const isOpen = openIndex === itemIndex && openIndex !== null;
                        const isOpen = openIndex.includes(itemIndex);

                        return hasChildren ? (
                            <React.Fragment key={itemIndex}>
                                <ListItemButton
                                    onClick={() => handleClick(itemIndex)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'ArrowDown')
                                            setOpenIndex((prev) => [
                                                ...prev,
                                                itemIndex,
                                            ]);
                                        if (event.key === 'ArrowUp')
                                            setOpenIndex((prev) =>
                                                prev.filter(
                                                    (i) => i !== itemIndex,
                                                ),
                                            );
                                    }}
                                >
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse
                                    in={isOpen}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        {item.children?.map(
                                            (child, childIndex) => (
                                                <ListItemButton
                                                    key={childIndex}
                                                    sx={{ pl: 4 }}
                                                >
                                                    <ListItemText
                                                        primary={child.title}
                                                    />
                                                </ListItemButton>
                                            ),
                                        )}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        ) : (
                            <ListItemButton key={itemIndex}>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        );
                    })}
                </Box>
            ))}
        </List>
    );
};
