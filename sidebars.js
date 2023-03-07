module.exports = {
  whitepaper: [
    'whitepaper/1_introduction',
    'whitepaper/2_networking',
    'whitepaper/3_storage',
    'whitepaper/4_mining',
    'whitepaper/5_account',
    'whitepaper/6_transaction',
    'whitepaper/7_consensus_verification',
    'whitepaper/8_next',
    'whitepaper/9_appendix',
  ],
  onboarding: [
    'onboarding/iron-fish-tutorial',
    {
      type: 'category',
      label: 'Install',
      collapsed: false,
      items: [
        'onboarding/installation-iron-fish',
        {
          type: 'link',
          label: 'Install using Docker',
          href: '#using-docker'
        },
        {
          type: 'link',
          label: 'Install from source',
          href: '#from-source'
        },
        {
          type: 'link',
          label: 'Install with Homebrew',
          href: '#homebrew-macos'
        },
      ],
    },
    'onboarding/start-an-iron-fish-node',
    'onboarding/new-account-iron-fish',
    'onboarding/send-receive-iron-fish-transactions',
    'onboarding/offline-transaction-signing',
    'onboarding/iron-fish-explorer',
    'onboarding/miner-iron-fish',
    'onboarding/iron-fish-node-health',
    'onboarding/iron-fish-configuration',
    'onboarding/iron-fish-wallet-commands',
    'onboarding/iron-fish-cli',
    'onboarding/iron-fish-blocks-commands',
  ]
};
