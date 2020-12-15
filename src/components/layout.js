import React, { useLayoutEffect, useState } from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Nav from "./nav";
import SearchInput from "./search-input.js"
import "./layout.css";
import { getDevice, isMobileOrTabletDevice } from '../utils/utils';

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
          primaryColor
          secondaryColor
          useTransparentContentBackground
          sidebarWidthValue
          sidebarColor
          useFooterWidth
        }
      }
    }
  `);

  const [device, setDevice] = useState(getDevice());

  useLayoutEffect(() => {
    const updateSize = () => {
      const newDevice = getDevice();
      setDevice(newDevice);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const logoPositionValue = data.site.siteMetadata?.logoPositionValue;
  const useLogo = data.site.siteMetadata?.useLogo;
  const siteLogo = data.site.siteMetadata?.siteLogo;
  const templateWidthValue = data.site.siteMetadata?.templateWidthValue;
  const useMenu = data.site.siteMetadata?.useMenu;
  const useMenuWidth = data.site.siteMetadata?.useMenuWidth;
  const useHeaderWhite = data.site.siteMetadata?.useHeaderWhite;
  const secondaryColor = data.site.siteMetadata?.secondaryColor;
  const siteName = data.site.siteMetadata?.siteName;
  const useTransparentContentBackground = data.site.siteMetadata?.useTransparentContentBackground;
  const useSidebar = data.site.siteMetadata?.useSidebar;
  const sidebarWidthValue = data.site.siteMetadata?.sidebarWidthValue;
  const sidebarColor = data.site.siteMetadata?.sidebarColor;
  const useFooterWidth = data.site.siteMetadata?.useFooterWidth;

  return (
    <div className={`flex flex-col h-screen ${useTransparentContentBackground ? 'bg-transparent' : 'bg-backgroundSite'}`}>
      <Header logoPositionValue={logoPositionValue} device={device} useHeaderWhite={useHeaderWhite} siteTitle={siteName} useLogo={useLogo} siteLogo={siteLogo} />
      {
        useMenu ? <Nav device={device} color={secondaryColor} templateWidthValue={templateWidthValue} useMenuWidth={useMenuWidth} /> : null
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
        {
          useSidebar ? (
            <aside className="aside" style={{
              width: isMobileOrTabletDevice(device) ? 0 : `${sidebarWidthValue}%`,
              backgroundColor: sidebarColor,
              display: isMobileOrTabletDevice(device) ? 'none' : 'block'
            }}>
              Aquí se insertará publi
            </aside>
          ) : null
        }
      </main>
      <footer style={{
        backgroundColor: secondaryColor,
        width: !useFooterWidth || isMobileOrTabletDevice(device) ? `100%` : `${templateWidthValue}%`,
      }}>
        © {new Date().getFullYear()}, Built with
        {` `}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
