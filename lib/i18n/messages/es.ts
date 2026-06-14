import type { Translations } from "../types"

export const es: Translations = {
  nav: {
    home: "Inicio",
    whyChoose: "Por qué elegir DWA",
    technology: "Tecnología",
    ecosystem: "Ecosistema",
    vision: "Nuestra visión",
    partners: "Socios",
    launchApp: "Abrir app",
  },
  hero: {
    headline1: "EL PRIMER",
    headline2: "BLACKROCK",
    headline3: "DESCENTRALIZADO",
    tagline: "DWA es un sistema operativo financiero Web3 impulsado por AI × Web3 × DAO × RWA",
    taglineMobile2: "UN SISTEMA OPERATIVO",
    taglineMobile3: "FINANCIERO WEB3 PARA TODOS",
    taglineDesktop: ["DWA", "UN SISTEMA", "OPERATIVO", "FINANCIERO", "WEB3", "PARA TODOS"],
    launchApp: "Abrir app",
  },
  whyChoose: {
    title: "¿Por qué elegir DWA?",
    features: {
      lowCost: {
        title: "Operación sin dominio y de bajo costo",
        description:
          "Despliegue de apps casi sin costo y acceso sin dominio, sin depender de infraestructura en la nube costosa ni de servidores centralizados.",
      },
      antiDdos: {
        title: "Protección anti-DDoS y de privacidad",
        description:
          "Redes descentralizadas y comunicación cifrada para proteger contra DDoS, filtraciones y control de plataformas.",
      },
      quantum: {
        title: "Seguridad resistente a la computación cuántica",
        description:
          "Criptografía avanzada diseñada para una resiliencia a largo plazo frente a futuras amenazas de cómputo.",
      },
      decentralized: {
        title: "Aplicaciones totalmente descentralizadas",
        description:
          "Descentraliza acceso a apps, transferencia de datos, identidad, activos y gobernanza, no solo los activos on-chain.",
      },
      communication: {
        title: "Comunicación confiable y sin fronteras",
        description:
          "Transferencia verificada de datos entre app y dispositivo y mensajería global libre de límites geográficos y fronteras de red.",
      },
      ownership: {
        title: "Autenticación de acceso y propiedad",
        description:
          "Identidad, datos, acceso a apps y puertas de enlace de activos bajo control del usuario, sin bloqueos unilaterales de plataforma.",
      },
    },
    readMore: "Leer más",
    readLess: "Leer menos",
  },
  technology: {
    title: "Tecnología",
    subtitle: "Tecnología central",
    bannerAlt: "Tecnología central de DWA",
    protocols: {
      network: {
        title: "Protocolo de red descentralizada",
        copy: "Construye una red superpuesta P2P que reduce el riesgo de punto único de fallo y permite resistencia a la censura, acceso global y ejecución descentralizada de aplicaciones.",
        keywords: [
          "Red P2P",
          "Sin punto único de fallo",
          "Resistencia a la censura",
          "Acceso global",
          "Marco de dirección como aplicación",
        ],
      },
      privacy: {
        title: "Protocolo de privacidad y cifrado",
        copy: "Protege datos de usuario, comportamiento de interacción y privacidad financiera mediante comunicación cifrada, privacidad de contenido, privacidad relacional y mecanismos de distribución multipunto.",
        keywords: [
          "Privacidad relacional",
          "Privacidad de contenido",
          "Cifrado híbrido",
          "Comunicación cifrada",
          "Seguridad de datos",
        ],
      },
      ai: {
        title: "Protocolo de razonamiento y estrategia de AI Agent",
        copy: "Los AI Agents integrados realizan análisis de mercado, asistencia estratégica, optimización de rutas, identificación de riesgos y planificación inteligente, todo dentro de reglas definidas por protocolo.",
        keywords: [
          "AI Agent",
          "Razonamiento estratégico",
          "Colaboración multiagente",
          "Identificación de riesgos",
          "Planificación inteligente",
        ],
      },
      rwa: {
        title: "Protocolo de activos RWA",
        copy: "Conecta activos del mundo real con la red de activos on-chain, habilitando incorporación, mapeo, circulación y gestión de activos RWA basada en protocolos.",
        keywords: [
          "RWA",
          "Tokenización de activos reales",
          "Protocolización de activos",
          "Liquidez on-chain",
          "Puerta global de activos",
        ],
      },
      dao: {
        title: "Protocolo de gobernanza y organización DAO",
        copy: "Gestiona parámetros del sistema, actualizaciones de reglas, colaboración del ecosistema y evolución a largo plazo mediante gobernanza DAO, transformando DWA de una plataforma centralizada a una red financiera autogobernada.",
        keywords: [
          "Gobernanza DAO",
          "Gestión de parámetros",
          "Actualizaciones de protocolo",
          "Coordinación comunitaria",
          "Autoevolución",
        ],
      },
    },
  },
  ecosystem: {
    title: "Ecosistema",
    p1: "DWA no es un producto de una sola función: es un sistema operativo financiero Web3 construido sobre nueve pilares del ecosistema.",
    p2: "Abarca trading, pagos, gestión de activos, RWA, AI, infraestructura de apps, wallets, social y préstamos; estos nueve pilares forman un circuito cerrado completo para activos on-chain.",
    bannerAlt: "Visión general del ecosistema DWA",
    gridHintMobile: "Toca un módulo para expandirlo y ver qué hace.",
    gridHintDesktop:
      "La liquidez fluye desde DWA Swap en el centro hacia todos los módulos. Pasa el cursor o toca una tarjeta para ver qué hace.",
    modules: {
      rwa: {
        name: "Protocolo RWA",
        tag: "Activos del mundo real",
        desc: "Conecta activos del mundo real (inmuebles, bonos, fondos, acciones, oro y ETF) con la liquidez Web3.",
      },
      card: {
        name: "DWA Card",
        tag: "Pagos",
        desc: "Conecta activos cripto con el gasto en el mundo real y la liquidación global de pagos.",
      },
      earn: {
        name: "DWA Earn",
        tag: "Rendimiento",
        desc: "Asignación de activos, agregación de estrategias y servicios financieros on-chain para usuarios.",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "Cuenta",
        desc: "Identidad on-chain unificada, gestión de activos multicadena, historial de transacciones y acceso al ecosistema.",
      },
      swap: {
        name: "DWA Swap",
        tag: "Núcleo de liquidez",
        desc: "Swaps de activos on-chain, trading cross-chain y agregación de liquidez: el núcleo que impulsa todo el ecosistema DWA.",
      },
      ai: {
        name: "AI Agent",
        tag: "Inteligencia",
        desc: "Análisis de mercado, asistencia estratégica, identificación de riesgos y soporte automatizado para decisiones financieras.",
      },
      lending: {
        name: "DWA Lending",
        tag: "Crédito",
        desc: "Préstamos on-chain, colateralización y liberación de liquidez para maximizar la eficiencia de los activos.",
      },
      social: {
        name: "DWA Social",
        tag: "Identidad",
        desc: "Identidad descentralizada (DID), relaciones on-chain, crédito social y perfil Web3.",
      },
      web3: {
        name: "Red de Apps Web3",
        tag: "Infraestructura",
        desc: "Despliegue de apps Web3 de bajo costo con ejecución sin servidor, acceso global y escalabilidad del ecosistema.",
      },
    },
  },
  vision: {
    title: "La visión definitiva de DWA",
    subtitle: "Civilización autónoma de gestión de activos",
    intro: "La forma definitiva de DWA no es una plataforma, sino:",
    definition: "Un sistema global autónomo de civilización de gestión de activos.",
    pillars: [
      "Activos de todo el mundo",
      "Estrategias ejecutadas por AI",
      "Seguridad garantizada on-chain",
      "Reglas definidas por DAO",
      "Valor compartido por los usuarios",
      "Un ecosistema infinitamente escalable",
    ],
    closing:
      "Esta es la próxima generación de BlackRock: no pertenece a ninguna institución, pertenece a los usuarios globales.",
  },
  partners: {
    title: "Nuestros socios",
    copy: "DWA construye conexiones abiertas con las principales redes blockchain, activos digitales, protocolos RWA e infraestructura financiera Web3 del mundo, impulsando la colaboración del ecosistema en la era de los activos on-chain.",
  },
  footer: {
    copyright: "© {year} DWA Labs. Todos los derechos reservados.",
  },
  common: {
    selectLanguage: "Seleccionar idioma",
  },
}
