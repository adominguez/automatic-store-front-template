import React from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Nav from "./nav";
import SearchInput from "./search-input.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteName
          useMenu
          useHeaderWhite
          useMenuWidth
          useSidebar
          templateWidthValue
          logoPositionValue
          useLogo
          siteLogo
          useTransparentContentBackground
        }
      }
    }
  `);

  const logoPositionValue = data.site.siteMetadata?.logoPositionValue;
  const useLogo = data.site.siteMetadata?.useLogo;
  const siteLogo = data.site.siteMetadata?.siteLogo;
  const templateWidthValue = data.site.siteMetadata?.templateWidthValue;
  const useMenu = data.site.siteMetadata?.useMenu;
  const useMenuWidth = data.site.siteMetadata?.useMenuWidth;
  const useHeaderWhite = data.site.siteMetadata?.useHeaderWhite;
  const siteName = data.site.siteMetadata?.siteName;
  const useTransparentContentBackground = data.site.siteMetadata?.useTransparentContentBackground;

  return (
    <div className={`flex flex-col h-screen ${useTransparentContentBackground ? 'bg-transparent' : 'bg-backgroundSite'}`}>
      <Header logoPositionValue={logoPositionValue} useHeaderWhite={useHeaderWhite} siteTitle={siteName} useLogo={useLogo} siteLogo={siteLogo} />
      {
        useMenu ? <Nav templateWidthValue={templateWidthValue} useMenuWidth={useMenuWidth} /> : null
      }
      <main className={`overflow-y-auto`}>
        <div className={`py-4 principal-container`}>
          <SearchInput />
        </div>
        <section className={`principal-container`}>
          <div className="w-full md:w-templateValue">
            {children}
          </div>
        </section>
      </main>
      <footer className="box-border flex justify-center w-full p-4 text-white bg-secondary-500">
        © {new Date().getFullYear()}, {siteName}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
