export default {
  name: 'frontpage',
  title: 'frontpage',
  type: 'document',
  fields: [
    {
      name: 'headerImage',
      title: 'Header image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'headerTitle',
      title: 'Header title',
      type: 'string'
    },
    {
      name: 'headerText',
      title: 'Header text',
      type: 'text'
    },
    {
      name: 'footerTitle',
      title: 'Footer title',
      type: 'string'
    },
    {
      name: 'footerText',
      title: 'Footer text',
      type: 'text'
    },
  ],
}