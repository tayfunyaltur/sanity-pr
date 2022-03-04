export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6222538ddf7c9b00b24cd26d',
                  title: 'Sanity Studio',
                  name: 'sanity-pr-studio',
                  apiId: '0d5fda37-a258-4ddd-9b6c-0b9ef5b66ee8'
                },
                {
                  buildHookId: '6222538d47ab4e00a42865cc',
                  title: 'Landing pages Website',
                  name: 'sanity-pr',
                  apiId: 'fe8959fb-1c28-4063-8f92-c2264f6ff474'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tayfunyaltur/sanity-pr',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-pr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
