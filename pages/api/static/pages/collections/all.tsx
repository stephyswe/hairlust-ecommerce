import { ProdLinks } from '../../navbar/products'
import { productPopularItems } from '../../shopify/products/popular/items'
import {
  accessoriesArticles,
  beardcareArticles,
  bundlesArticles,
  giftcardArticles,
  haircareArticles,
  hairstylingArticles,
  lashesandbrowsArticles,
  scalpcareArticles,
  shopifyCollectionAllArticlesData,
  supplementsArticles,
} from './articles'

export const shopifyCollectionAllData = {
  items: productPopularItems,
  articles: shopifyCollectionAllArticlesData,
  productViewed: {
    title: 'Du har nu sett',
    buttonText: 'Se fler produkter',
  },
  header: {
    rating: 4.4,
    backLink: 'Gå tillbaka',
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_180x.jpg?v=1663851706 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_320x.jpg?v=1663851706 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_480x.jpg?v=1663851706 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_540x.jpg?v=1663851706 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_720x.jpg?v=1663851706 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_768x.jpg?v=1663851706 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_900x.jpg?v=1663851706 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_1024x.jpg?v=1663851706 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_1080x.jpg?v=1663851706 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/AllProducts_1296x.jpg?v=1663851706 1296w',
    },
    title: 'Alla produkter',
    subtitle:
      'Våra produkter är resultatet av vår kärlek till innovativ och hållbar hårvård. Utforska våra produkter så kanske du också blir förälskad?',
  },
  navWrapper: {
    title: 'Kategorier',
    options: ProdLinks,
  },
  topBar: {
    productsFound: '85 produkter',
    title: 'Sortera efter',
    options: [
      {
        title: 'Kön',
        dataName: 'gender',
      },
      {
        title: 'Serie',
        dataName: 'series',
      },
      {
        title: 'Egenskaper',
        dataName: 'attribute',
      },
      {
        title: 'Hårtyp',
        dataName: 'hairtype',
      },
    ],
  },
}

export const shopifyCollectionNewsData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_180x.jpg?v=1676473514 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_320x.jpg?v=1676473514 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_480x.jpg?v=1676473514 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_540x.jpg?v=1676473514 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_720x.jpg?v=1676473514 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_768x.jpg?v=1676473514 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_900x.jpg?v=1676473514 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_1024x.jpg?v=1676473514 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_1080x.jpg?v=1676473514 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/HairLust_Michelle_2022-09-13_02964_copy_1296x.jpg?v=1676473514 1296w',
    },
    title: 'Nyheter',
    subtitle:
      'Ge ett varmt välkomnande till våra nya produkter. Utforska de senaste tillskotten till Hairlust universum, och kanske hittar du en ny favorit.',
  },
  articles: [],
}

export const shopifyCollectionBundlesData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_180x.jpg?v=1671713443 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_320x.jpg?v=1671713443 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_480x.jpg?v=1671713443 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_540x.jpg?v=1671713443 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_720x.jpg?v=1671713443 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_768x.jpg?v=1671713443 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_900x.jpg?v=1671713443 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_1024x.jpg?v=1671713443 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_1080x.jpg?v=1671713443 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/GiftBoxes_ff7f7644-3f44-49a9-9a8f-18c55d050115_1296x.jpg?v=1671713443 1296w',
    },
    title: 'Erbjudanden & Presentboxar',
    subtitle:
      'Unna dig själv eller en någon annan som älskar och uppskattar hårvård av hög kvalitet - och ett bra erbjudande.',
  },
  articles: bundlesArticles,
}

export const shopifyCollectionSupplementsData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_180x.jpg?v=1673869407 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_320x.jpg?v=1673869407 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_480x.jpg?v=1673869407 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_540x.jpg?v=1673869407 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_720x.jpg?v=1673869407 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_768x.jpg?v=1673869407 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_900x.jpg?v=1673869407 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_1024x.jpg?v=1673869407 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_1080x.jpg?v=1673869407 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Kosttilskud1_a6375401-cb44-49a7-a920-7b379b87400d_1296x.jpg?v=1673869407 1296w',
    },
    title: 'Kosttillskott för håret',
    subtitle:
      'Ge dig själv det lilla extra genom att förse ditt hår med ett kosttillskott - ditt hår kommer att älska dig för det!',
  },
  articles: supplementsArticles,
}

export const shopifyCollectionHairCareData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_180x.jpg?v=1663931013 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_320x.jpg?v=1663931013 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_480x.jpg?v=1663931013 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_540x.jpg?v=1663931013 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_720x.jpg?v=1663931013 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_768x.jpg?v=1663931013 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_900x.jpg?v=1663931013 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_1024x.jpg?v=1663931013 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_1080x.jpg?v=1663931013 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Men_-_Winback_-_25_discount_-_Resend_16219d24-e6a8-4e3e-a1fa-735f6aa7f799_1296x.jpg?v=1663931013 1296w',
    },
    title: 'Hårvård',
    subtitle:
      'Ta med dig spaupplevelsen hem till ditt eget badrum och njut av ekologisk, innovativ och hållbar hårvård.',
  },
  articles: haircareArticles,
}

export const shopifyCollectionScalpCareData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_180x.jpg?v=1663315113 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_320x.jpg?v=1663315113 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_480x.jpg?v=1663315113 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_540x.jpg?v=1663315113 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_720x.jpg?v=1663315113 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_768x.jpg?v=1663315113 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_900x.jpg?v=1663315113 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_1024x.jpg?v=1663315113 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_1080x.jpg?v=1663315113 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_scalp-care_V2_1296x.jpg?v=1663315113 1296w',
    },
    title: 'Hårbottenvård',
    subtitle:
      'Vårda din hårbotten med en naturlig hårbottenbehandling för att förhindra irritation, klåda och fethet i hårbotten!',
  },
  articles: scalpcareArticles,
}

export const shopifyCollectionHairStylingData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_180x.jpg?v=1663315074 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_320x.jpg?v=1663315074 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_480x.jpg?v=1663315074 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_540x.jpg?v=1663315074 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_720x.jpg?v=1663315074 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_768x.jpg?v=1663315074 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_900x.jpg?v=1663315074 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_1024x.jpg?v=1663315074 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_1080x.jpg?v=1663315074 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_hair-styling_V2_1296x.jpg?v=1663315074 1296w',
    },
    title: 'Hårstyling',
    subtitle: 'Naturliga hårstylingsprodukter för att visa ditt sanna jag!',
  },
  articles: hairstylingArticles,
}

export const shopifyCollectionAccessoriesData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_180x.jpg?v=1663931009 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_320x.jpg?v=1663931009 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_480x.jpg?v=1663931009 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_540x.jpg?v=1663931009 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_720x.jpg?v=1663931009 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_768x.jpg?v=1663931009 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_900x.jpg?v=1663931009 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_1024x.jpg?v=1663931009 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_1080x.jpg?v=1663931009 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Borste_7_a36d257b-e0a3-48a4-83b5-8eec22df2719_1296x.jpg?v=1663931009 1296w',
    },
    title: 'Borstar & Tillbehör',
    subtitle:
      'Gör din hårvårdsrutin komplett med våra skonsamma hårborstar och accessoarer.',
  },
  articles: accessoriesArticles,
}

export const shopifyCollectionBeddingData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_180x.jpg?v=1669796891 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_320x.jpg?v=1669796891 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_480x.jpg?v=1669796891 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_540x.jpg?v=1669796891 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_720x.jpg?v=1669796891 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_768x.jpg?v=1669796891 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_900x.jpg?v=1669796891 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_1024x.jpg?v=1669796891 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_1080x.jpg?v=1669796891 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collection_banner_bedding_1296x.jpg?v=1669796891 1296w',
    },
    title: 'Bambu sängkläder',
    subtitle:
      'Fullständiga din hårvårdsrutin med våra ultramjuka bambupåslakan och örngott.',
  },
  articles: [],
}

export const shopifyCollectionLashesAndBrowsData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_180x.jpg?v=1663931012 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_320x.jpg?v=1663931012 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_480x.jpg?v=1663931012 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_540x.jpg?v=1663931012 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_720x.jpg?v=1663931012 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_768x.jpg?v=1663931012 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_900x.jpg?v=1663931012 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_1024x.jpg?v=1663931012 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_1080x.jpg?v=1663931012 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/BrowsEyelashes_900e0b6b-3785-4f3f-b21f-242b14c01bb7_1296x.jpg?v=1663931012 1296w',
    },
    title: 'Fransar & Bryn',
    subtitle:
      'Välj en naturlig väg till fylligare ögonbryn och längre ögonfransar med vårt skonsamma ögonbrynsserum och ögonfransserum',
  },
  articles: lashesandbrowsArticles,
}

export const shopifyCollectionBeardCareData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_180x.jpg?v=1663315098 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_320x.jpg?v=1663315098 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_480x.jpg?v=1663315098 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_540x.jpg?v=1663315098 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_720x.jpg?v=1663315098 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_768x.jpg?v=1663315098 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_900x.jpg?v=1663315098 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_1024x.jpg?v=1663315098 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_1080x.jpg?v=1663315098 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/collection_banner_beard-care_v3_1296x.jpg?v=1663315098 1296w',
    },
    title: 'Skäggvård',
    subtitle:
      'Ta hand om ditt skägg med våra högkvalitativa skäggvårdsprodukter!',
  },
  articles: beardcareArticles,
}

export const shopifyCollectionGiftCardData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_180x.jpg?v=1663851885 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_320x.jpg?v=1663851885 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_480x.jpg?v=1663851885 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_540x.jpg?v=1663851885 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_720x.jpg?v=1663851885 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_768x.jpg?v=1663851885 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_900x.jpg?v=1663851885 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_1024x.jpg?v=1663851885 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_1080x.jpg?v=1663851885 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Giftcard2_1296x.jpg?v=1663851885 1296w',
    },
    title: 'Presentkort',
    subtitle:
      'Skäm bort din mamma, pappa, syskon, kompis eller någon annan som står dig nära med ett presentkort från Hairlust.',
  },
  articles: giftcardArticles,
}

export const shopifyCollectionStockSaleData = {
  ...shopifyCollectionAllData,
  header: {
    ...shopifyCollectionAllData.header,
    image: {
      srcSet:
        '//cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_180x.webp?v=1669706829 180w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_320x.webp?v=1669706829 320w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_480x.webp?v=1669706829 480w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_540x.webp?v=1669706829 540w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_720x.webp?v=1669706829 720w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_768x.webp?v=1669706829 768w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_900x.webp?v=1669706829 900w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_1024x.webp?v=1669706829 1024w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_1080x.webp?v=1669706829 1080w, //cdn.shopify.com/s/files/1/2199/8485/collections/Collecion_banner_Oldies-but-Goldies_1296x.webp?v=1669706829 1296w',
    },
    title: 'Oldies but Goldies',
    subtitle:
      'Vi utvecklas! Därför vi har specialerbjudanden på våra oldies but goldies - men endast under en begränsad tid',
  },
  articles: [],
}
