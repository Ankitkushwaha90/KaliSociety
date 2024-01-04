export default{
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
   
    {
      type: 'mainImage',
      option: {hotspot: true}
    },
    {
      type: 'code',
      title: 'Code example'
    }
  ]
}