module.exports = {
    siteMetadata: {
      siteTitle: `ACME`,
      siteTitleAlt: `Simple Blog - gatsby-theme-acmeblog`,
      siteHeadline: `Simple Blog - gatsby theme from tiagofsanchez`,
      // siteUrl: ``,
      siteDescription: `Yes, we could be a barista :)
      We create content for the web - you know, that thing that lives on the cloud? Just kidding! This is a gatsby theme that you can use for share your cool work.
      Hope you enjoy!`,
      siteLanguage: `en`,
      siteImage: `./images/logo.png`,
      author: `tiagofsanchez`,
      navigation: [
        {
          title: `blog`,
          slug: `/blog`,
        },
        {
          title: `about`,
          slug: `/about`,
        },
      ],
      externalLinks: [
        {
          name: `LinkedIn`,
          url: `https://www.linkedin.com/in/tiagofsanchez/`,
        },
        {
          name: `Github`,
          url: `https://github.com/tiagofsanchez`,
        },
      ],
    },
      plugins: [
        {
          resolve: "gatsby-theme-acmeblog",
          options: {
            postTableOfContents: true,
          },
        },
      ],
    };
    