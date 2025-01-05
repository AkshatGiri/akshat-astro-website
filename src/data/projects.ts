export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Hiros.ai | AI Betting Agent",
    techs: ["ai agents", "solidity", "nextjs"],
    link: "https://hiros.vercel.app/",
    isComingSoon: true
  },
  {
    title: "Ekos.io | Website and Auction",
    techs: ["viem", "solidity", "nextjs"],
    link: "https://ekos.io/",
  },
  {
    title: "CoinScout.xyz | Algorithmic Crypto Trading",
    techs: ["typescript", "python", "rust", "pytorch", "etc"],
    link: "https://x.com/summoningxyz"
  },
  {
    title: "Banda.fun | Band the Panda Memecoin",
    techs: ["rust", "solana"],
    link: "https://banda.fun/"
  },
  {
    title: "FlowMultisender.com - Multisender for the FlowEVM Chain",
    techs: ["solidity", "react"],
    link: "https://flowmultisender.com/",
  },
  {
    title: "Solana Wallet Batch Manager | Open Source",
    techs: ["typescript"],
    link: "https://github.com/AkshatGiri/solana_batch_wallet_management",
  },
  {
    title: "Kai | KeyboardAI - ChatGPT accessible from your keyboard",
    techs: ["swift", "openai"],
    link: "https://trykai.app/",
  },
  { 
    title: "Summoning.xyz | Onchain multiplayer event",
    techs: ["web3", "solidity", "nextjs"],
    link: "https://x.com/summoningxyz"
  },
  { 
    title: "Vaynersports Pass | NFT Drop",
    techs: ["web3", "solidity", "nextjs"],
    link: "https://opensea.io/collection/vaynersports-pass-vsp"
  }
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro", "TypeScript"],
  //   link: "https://github.com/MaeWolff/astro-portfolio-template",
  //   isComingSoon: true,
  // },
];

export default projects;
