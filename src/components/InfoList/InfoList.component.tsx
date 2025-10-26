import { Avatar, ListItemText } from '@mui/material';

import {
    StyledList,
    StyledListItem,
    StyledListItemAvatar,
} from './InfoList.styles';
import { InfoListProps } from './InfoList.types';
import { Typography } from '../Typography';

export const InfoList = ({ data, valueFormat }: InfoListProps) => (
    <StyledList disablePadding aria-label="Information list">
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
                        <Typography variant="h3" linesToClamp={1} showTooltip>
                            {item.label}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant="subtitle2"
                            linesToClamp={1}
                            color="textSecondary"
                            showTooltip
                            component="h4"
                        >
                            {item.caption}
                        </Typography>
                    }
                />

                <Typography
                    variant="h3"
                    textAlign="right"
                    aria-label={`${item.label}: ${item.value}`}
                    showTooltip
                    linesToClamp={1}
                >
                    {valueFormat(item.value)}
                </Typography>
            </StyledListItem>
        ))}
    </StyledList>
);
