import { MenuEntry } from '@gemswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.gemswap.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.gemswap.org/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.gemswap.org/#/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'IDO',
    icon: 'PoolIcon',
    href: '#',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: '#',
      },
      {
        label: 'CoinGecko',
        href: '#',
      },
      {
        label: 'CoinMarketCap',
        href: '#',
      },
      {
        label: 'AstroTools',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Gem-Swap/',
      },
      {
        label: 'Docs',
        href: 'https://calcdevs.gitbook.io/gemswap/',
      },
      {
        label: 'Blog',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IWO',
  //   icon: 'IfoIcon',
  //   href:
  //     'https://google.com',
  // },
  {
    label: 'Audit by CertiK',
    icon: 'ShieldIcon',
    href: '#',
  },
]

export default config
