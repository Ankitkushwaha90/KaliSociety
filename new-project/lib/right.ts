export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export type data = {
  name: string;
  data: string;
  slug: string;
};
export const data = [
  {
    name: "HTML",
    slug: "/docs/page",
  },
  {
    name: "CSS",
    slug: "/",
  }
  ,
  {
    name: "JAVASCRIPT",
    slug: "/docs",
  },
  {
    name: "HTML",
    slug: "/docs/page",
  },
  {
    name: "CSS",
    slug: "/",
  }
  ,
  {
    name: "JAVASCRIPT",
    slug: "/docs",
  },{
    name: "HTML",
    slug: "/docs/page",
  },
  {
    name: "CSS",
    slug: "/",
  }
  ,
  {
    name: "JAVASCRIPT",
    slug: "/docs",
  },{
    name: "HTML",
    slug: "/docs/page",
  },
  {
    name: "CSS",
    slug: "/",
  }
  ,
  {
    name: "JAVASCRIPT",
    slug: "/docs",
  },
]


export const demos: { name: string; items: Item[]; }[] = [
  {
    name: 'Ethical Hacking',
    items: [
      {
        name: 'nmap',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'metasploit',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'aircrack-ng',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'Basic programming',
    items: [
      {
        name: 'c',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'javascript',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'python',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'MongooseDb',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'SchemaFile',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'ActionFile',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'SubmiteBtn',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Navbar',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'AI in python',
    items: [
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
      {
        name: 'Code Snippets',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
