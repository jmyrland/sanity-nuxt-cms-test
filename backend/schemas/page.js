export default {
  name: 'page',
  title: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    },
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