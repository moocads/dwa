import type { Translations } from "../types"

export const fr: Translations = {
  nav: {
    home: "Accueil",
    whyChoose: "Pourquoi choisir DWA",
    technology: "Technologie",
    ecosystem: "Écosystème",
    vision: "Notre vision",
    partners: "Partenaires",
    launchApp: "Lancer l'app",
  },
  hero: {
    headline1: "LE PREMIER",
    headline2: "BLACKROCK",
    headline3: "DÉCENTRALISÉ AU MONDE",
    tagline: "DWA est un système d'exploitation financier Web3 propulsé par AI × Web3 × DAO × RWA",
    taglineMobile2: "UN SYSTÈME D'EXPLOITATION",
    taglineMobile3: "FINANCIER WEB3 POUR TOUS",
    taglineDesktop: ["DWA", "UN SYSTÈME", "D'EXPLOITATION", "FINANCIER", "WEB3", "POUR TOUS"],
    launchApp: "Lancer l'app",
  },
  whyChoose: {
    title: "Pourquoi choisir DWA ?",
    features: {
      lowCost: {
        title: "Exploitation sans domaine et à faible coût",
        description:
          "Déploiement d'apps à coût quasi nul et accès sans nom de domaine, sans dépendre d'une infrastructure cloud coûteuse ni de serveurs centralisés.",
      },
      antiDdos: {
        title: "Protection anti-DDoS et confidentialité",
        description:
          "Réseaux décentralisés et communication chiffrée pour résister aux DDoS, aux fuites et au contrôle des plateformes.",
      },
      quantum: {
        title: "Sécurité résistante au quantique",
        description:
          "Cryptographie avancée conçue pour une résilience durable face aux menaces informatiques futures.",
      },
      decentralized: {
        title: "Applications entièrement décentralisées",
        description:
          "Décentralise l'accès aux apps, le transfert de données, l'identité, les actifs et la gouvernance, pas seulement les actifs on-chain.",
      },
      communication: {
        title: "Communication fiable et sans frontières",
        description:
          "Transfert vérifié des données entre app et appareil, et messagerie mondiale sans limites géographiques ni frontières réseau.",
      },
      ownership: {
        title: "Authentification d'accès et propriété",
        description:
          "Identité, données, accès aux apps et passerelles d'actifs contrôlés par l'utilisateur, sans bannissement unilatéral de plateforme.",
      },
    },
    readMore: "Voir plus",
    readLess: "Voir moins",
  },
  technology: {
    title: "Technologie",
    subtitle: "Technologie de base",
    bannerAlt: "Technologie de base DWA",
    protocols: {
      network: {
        title: "Protocole réseau décentralisé",
        copy: "Construit un réseau superposé P2P qui réduit le risque de point unique de défaillance et permet la résistance à la censure, l'accès mondial et l'exécution d'applications décentralisées.",
        keywords: [
          "Réseau P2P",
          "Sans point unique de défaillance",
          "Résistance à la censure",
          "Accès mondial",
          "Cadre adresse-en-tant-qu'application",
        ],
      },
      privacy: {
        title: "Protocole de confidentialité et chiffrement",
        copy: "Protège les données utilisateur, les comportements d'interaction et la confidentialité financière grâce à la communication chiffrée, la confidentialité du contenu, la confidentialité relationnelle et des mécanismes de distribution multipoints.",
        keywords: [
          "Confidentialité relationnelle",
          "Confidentialité du contenu",
          "Chiffrement hybride",
          "Communication chiffrée",
          "Sécurité des données",
        ],
      },
      ai: {
        title: "Protocole de raisonnement et de stratégie d'AI Agent",
        copy: "Les AI Agents intégrés réalisent des analyses de marché, une assistance stratégique, l'optimisation des parcours, l'identification des risques et l'orchestration intelligente, selon des règles définies par le protocole.",
        keywords: [
          "AI Agent",
          "Raisonnement stratégique",
          "Collaboration multi-agent",
          "Identification des risques",
          "Orchestration intelligente",
        ],
      },
      rwa: {
        title: "Protocole d'actifs RWA",
        copy: "Connecte les actifs du monde réel au réseau d'actifs on-chain, en prenant en charge l'intégration, le mapping, la circulation et la gestion des actifs RWA basée sur des protocoles.",
        keywords: [
          "RWA",
          "Tokenisation d'actifs réels",
          "Protocolisation des actifs",
          "Liquidité on-chain",
          "Passerelle mondiale d'actifs",
        ],
      },
      dao: {
        title: "Protocole de gouvernance et d'organisation DAO",
        copy: "Gère les paramètres système, les mises à niveau des règles, la collaboration de l'écosystème et l'évolution à long terme via la gouvernance DAO, transformant DWA d'une plateforme centralisée en réseau financier auto-gouverné.",
        keywords: [
          "Gouvernance DAO",
          "Gestion des paramètres",
          "Mises à niveau du protocole",
          "Coordination communautaire",
          "Auto-évolution",
        ],
      },
    },
  },
  ecosystem: {
    title: "Écosystème",
    p1: "DWA n'est pas un produit à fonction unique : c'est un système d'exploitation financier Web3 construit sur neuf piliers d'écosystème.",
    p2: "Trading, paiements, gestion d'actifs, RWA, AI, infrastructure applicative, wallets, social et lending : ces neuf piliers forment une boucle complète pour les actifs on-chain.",
    bannerAlt: "Vue d'ensemble de l'écosystème DWA",
    gridHintMobile: "Touchez un module pour l'ouvrir et voir son rôle.",
    gridHintDesktop:
      "Le réseau d'applications Web3 est au centre et relie chaque module. Survolez ou touchez une carte pour voir son rôle.",
    modules: {
      rwa: {
        name: "Protocole RWA",
        tag: "Actifs du monde réel",
        desc: "Connecte les actifs du monde réel (immobilier, obligations, fonds, actions, or, ETF) à la liquidité Web3.",
      },
      card: {
        name: "DWA Card",
        tag: "Paiements",
        desc: "Relie les crypto-actifs aux dépenses du monde réel et au règlement mondial des paiements.",
      },
      earn: {
        name: "DWA Earn",
        tag: "Rendement",
        desc: "Allocation d'actifs, agrégation de stratégies et services financiers on-chain pour les utilisateurs.",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "Compte",
        desc: "Identité on-chain unifiée, gestion d'actifs multi-chaînes, historique des transactions et accès à l'écosystème.",
      },
      swap: {
        name: "DWA Swap",
        tag: "Cœur de liquidité",
        desc: "Swaps d'actifs on-chain, trading cross-chain et agrégation de liquidité : le cœur qui alimente tout l'écosystème DWA.",
      },
      ai: {
        name: "AI Agent",
        tag: "Intelligence",
        desc: "Analyse de marché, assistance stratégique, identification des risques et aide automatisée à la décision financière.",
      },
      lending: {
        name: "DWA Lending",
        tag: "Crédit",
        desc: "Lending on-chain, collatéralisation et libération de liquidité pour maximiser l'efficacité des actifs.",
      },
      social: {
        name: "DWA Social",
        tag: "Identité",
        desc: "Identité décentralisée (DID), relations on-chain, crédit social et profil Web3.",
      },
      web3: {
        name: "Réseau d'apps Web3",
        tag: "Infrastructure",
        desc: "Déploiement d'apps Web3 à faible coût avec exécution serverless, accès mondial et évolutivité de l'écosystème.",
      },
    },
  },
  vision: {
    title: "La vision ultime de DWA",
    subtitle: "Civilisation autonome de gestion d'actifs",
    intro: "La forme ultime de DWA n'est pas une plateforme, mais :",
    definition: "Un système mondial autonome de civilisation de gestion d'actifs.",
    pillars: [
      "Des actifs du monde entier",
      "Des stratégies exécutées par l'AI",
      "Une sécurité garantie on-chain",
      "Des règles définies par la DAO",
      "Une valeur partagée par les utilisateurs",
      "Un écosystème infiniment extensible",
    ],
    closing:
      "C'est la prochaine génération de BlackRock : elle n'appartient à aucune institution, elle appartient aux utilisateurs du monde entier.",
  },
  partners: {
    title: "Nos partenaires",
    copy: "DWA crée des connexions ouvertes avec les principaux réseaux blockchain, actifs numériques, protocoles RWA et infrastructures financières Web3 du monde, pour accélérer la collaboration de l'écosystème à l'ère des actifs on-chain.",
  },
  footer: {
    copyright: "© {year} DWA Labs. Tous droits réservés.",
  },
  common: {
    selectLanguage: "Choisir la langue",
  },
}
