import {defineType, defineField} from 'sanity'

const Blog = {
    name: 'blog',
    title: 'Blogs',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        title: 'Directors',
        name: 'directors',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: 'Description',
        type: 'text',
        title: 'description',
      },
      {
        name: 'code',
        type: 'text',
        title: 'code',
      },
      {      
        name: 'ProjectImages',      
        title: 'Project Images',      
        type: 'array',      
        of: [{ type: 'image' }]     
        },
        defineField({
          type: 'code',
          name: 'myCodeField',
          title: 'Code with all options',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
            ],
            withFilename: true,
          },
        }),
      {
        name: 'title1',
        type: 'string',
        title: 'title1',
      },
      {
        name: 'Description1',
        type: 'text',
        title: 'description1',
      },
      {
        name: 'code1',
        type: 'text',
        title: 'code1',
      },
      {
        name: 'title2',
        type: 'string',
        title: 'title2',
      },
      {
        name: 'Description2',
        type: 'text',
        title: 'description2',
      },
      {
        name: 'code2',
        type: 'text',
        title: 'code2',
      },
      {
        name: 'title3',
        type: 'string',
        title: 'title3',
      },
      {
        name: 'Description3',
        type: 'text',
        title: 'description3',
      },
      {
        name: 'code3',
        type: 'text',
        title: 'code3',
      },
      {
        name: 'title4',
        type: 'string',
        title: 'title4',
      },
      {
        name: 'Description4',
        type: 'text',
        title: 'description4',
      },
      {
        name: 'code4',
        type: 'text',
        title: 'code4',
      },
      {
        name: 'title5',
        type: 'string',
        title: 'title5',
      },
      {
        name: 'Description5',
        type: 'text',
        title: 'description5',
      },
      {
        name: 'code5',
        type: 'text',
        title: 'code5',
      }
    ]
  }
  export default Blog;