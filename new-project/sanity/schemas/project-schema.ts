import {defineType, defineField} from 'sanity'

const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
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
      defineField({
        name: 'zhOnly',
        type: 'code',
        options: {
          language: 'zh',
          languageAlternatives: [
            //Adds support for zh language, using sh syntax highlighting
            {title: 'ZH', value: 'zh', mode: 'sh'},
          ],
        },
      }),
      defineField({
        name: 'exampleRust',
        title: 'Example usage',
        type: 'code',
        options: {
          languageAlternatives: [
            {title: 'Javascript', value: 'javascript'},
            {title: 'Angular', value: 'angular'},
            {title: 'Angular-like', value: 'angular-like', mode: 'angular'}, // uses angular highlighter
          ],
        },
      }),
      {
        name: "url",
        title: "URL",
        type: "url"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;