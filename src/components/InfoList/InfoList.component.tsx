import { Avatar, List, ListItemText } from '@mui/material';

import { StyledListItem, StyledListItemAvatar } from './InfoList.styles';
import { InfoListProps } from './InfoList.types';
import { Typography } from '../Typography';

export const InfoList = ({ data, valueFormat }: InfoListProps) => (
    <List disablePadding aria-label="Information list">
        {data.map((item, index) => (
            <StyledListItem key={index} aria-label={`Info item: ${item.label}`}>
                {item.avatar && (
                    <StyledListItemAvatar>
                        <Avatar
                            src={item.avatar}
                            alt={item.label}
                            sx={{ width: '100%', height: '100%' }}
                            aria-label={`${item.label} avatar`}
                        />
                    </StyledListItemAvatar>
                )}

                <ListItemText
                    disableTypography
                    sx={{ margin: 0 }}
                    primary={
                        <Typography variant="h4" linesToClamp={1} tooltip>
                            {item.label}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant="subtitle2"
                            linesToClamp={1}
                            color="textSecondary"
                            tooltip
                        >
                            {item.caption}
                        </Typography>
                    }
                />

                <Typography
                    variant="h4"
                    textAlign="right"
                    aria-label={`${item.label}: ${item.value}`}
                >
                    {valueFormat(item.value)}
                </Typography>
            </StyledListItem>
        ))}
    </List>
);
