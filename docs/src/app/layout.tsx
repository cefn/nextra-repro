import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { PropsWithChildren } from "react";

export const metadata = {
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = <Navbar logo={<span>Markdown site</span>} />;
const footer = <Footer>Collaboratively maintained documentation</Footer>;

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{
            autoCollapse: true,
            toggleButton: true,
          }}
          pageMap={await getPageMap()}
          footer={footer}
          feedback={{
            content: (
              <a href="http://example.com/discussions">
                Discussions
              </a>
            ),
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
