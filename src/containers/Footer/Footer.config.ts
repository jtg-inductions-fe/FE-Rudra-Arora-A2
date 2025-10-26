import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TwitterIcon from '@mui/icons-material/Twitter';

export const footerConfig = {
    description: '© 2021 Themesberg, LLC. All rights reserved.',
    links: [
        {
            url: 'https://facebook.com/',
            iconURL: FacebookIcon,
            ariaLabel: 'Follow us on Facebook',
        },
        {
            url: 'https://twitter.com/',
            iconURL: TwitterIcon,
            ariaLabel: 'Follow us on Twitter',
        },

        {
            url: 'https://github.com/',
            iconURL: GitHubIcon,
            ariaLabel: 'Follow us on Github',
        },
        {
            url: 'https://dribbble.com/',
            iconURL: SportsBasketballIcon,
            ariaLabel: 'Follow us on Dribbble',
        },
    ],
};
