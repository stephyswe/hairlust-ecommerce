export const defaultDataStructure = {
  id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjA=',
  name: 'New Short Sleeve T-Shirt Test',
  vendor: 'Next.js',
  path: '/new-short-sleeve-t-shirt',
  slug: 'new-short-sleeve-t-shirt',
  price: { value: 25, currencyCode: 'USD' },
  description:
    'Show off your love for Next.js and Vercel with this unique, limited edition t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made! All proceeds will be donated to charity.',
  descriptionHtml:
    '<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>',
  images: [
    {
      url: '/assets/drop-shirt-0.png',
      altText: 'Shirt',
      width: 1000,
      height: 1000,
    },
    {
      url: '/assets/drop-shirt-1.png',
      altText: 'Shirt',
      width: 1000,
      height: 1000,
    },
    {
      url: '/assets/drop-shirt-2.png',
      altText: 'Shirt',
      width: 1000,
      height: 1000,
    },
  ],
  variants: [
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjAss=',
      name: 'New Short Sleeve T-Shirt',
      sku: 'new-short-sleeve-t-shirt',
      options: [
        {
          __typename: 'MultipleChoiceOption',
          id: 'asd',
          displayName: 'Size',
          values: [{ label: 'XL' }],
        },
      ],
    },
  ],
  options: [
    {
      id: 'option-color',
      displayName: 'Color',
      values: [{ label: 'color', hexColors: ['#222'] }],
    },
    {
      id: 'option-size',
      displayName: 'Size',
      values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
    },
  ],
}
