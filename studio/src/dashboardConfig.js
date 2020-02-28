export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e592b98fd58ef63b1f71ff7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tdeaipwi',
                  apiId: '5e927ba9-eb7b-4e0b-bd15-76e11809ac41'
                },
                {
                  buildHookId: '5e592b982083bf287ff93636',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wdcdiz4x',
                  apiId: '4db46e19-33e4-4de7-b7aa-5f7154be8e00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aasenaasen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wdcdiz4x.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
