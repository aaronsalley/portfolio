export const fetchData = async () => {
  const req = await fetch(
    process.env.WP_GRAPH_URL ?? 'http://aarons-macbook-pro.local/graph',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query HeaderQuery {
            generalSettings {
              title
            }
            navItems: menuItems(where: {location: SITE_NAV}) {
              nodes {
                label
                uri
              }
            }                
            work: posts(where: {categoryName: "work"}) {
              nodes {
                title
                uri
                excerpt
              }
            }
            cases: posts(where: {categoryName: "case"}) {
              nodes {
                title
                uri
              }
            }
            blog: posts(where: {categoryName: "blog"}) {
              nodes {
                title
                uri
              }
            }
            socialItems: menuItems(where: {location: SOCIAL_LINKS}) {
              nodes {
                label
                uri
                target
                cssClasses
              }
            }                
          }
        `,
      }),
    }
  );

  return await req.json();
};
