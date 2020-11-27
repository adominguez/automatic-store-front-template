/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useLayoutEffect, useState } from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Nav from "./nav";
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
          bodyBackgroundColor
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

  const bodyBackgroundColor = data.site.siteMetadata?.bodyBackgroundColor;
  const logoPositionValue = data.site.siteMetadata?.logoPositionValue;
  const templateWidthValue = data.site.siteMetadata?.templateWidthValue;
  const useMenu = data.site.siteMetadata?.useMenu;
  const useMenuWidth = data.site.siteMetadata?.useMenuWidth;
  const useHeaderWhite = data.site.siteMetadata?.useHeaderWhite;
  const primaryColor = data.site.siteMetadata?.primaryColor;
  const secondaryColor = data.site.siteMetadata?.secondaryColor;
  const siteName = data.site.siteMetadata?.siteName;
  const useTransparentContentBackground = data.site.siteMetadata?.useTransparentContentBackground;
  const useSidebar = data.site.siteMetadata?.useSidebar;
  const sidebarWidthValue = data.site.siteMetadata?.sidebarWidthValue;
  const sidebarColor = data.site.siteMetadata?.sidebarColor;
  const useFooterWidth = data.site.siteMetadata?.useFooterWidth;

  return (
    <div className="container" style={{
      backgroundColor: bodyBackgroundColor
    }}>
      <Header logoPositionValue={logoPositionValue} device={device} templateWidthValue={templateWidthValue} useHeaderWhite={useHeaderWhite} color={primaryColor} siteTitle={siteName} />
      {
        useMenu ? <Nav device={device} color={secondaryColor} templateWidthValue={templateWidthValue} useMenuWidth={useMenuWidth} /> : null
      }
      <main className="main" style={{
        width: isMobileOrTabletDevice(device) ? `100%` : `${templateWidthValue}%`
      }}>
        <section className="section" style={{
          backgroundColor: useTransparentContentBackground ? 'transparent' : '#fff',
          width: isMobileOrTabletDevice(device) ? '100%' : useSidebar ? `${templateWidthValue - sidebarWidthValue}%` : `${templateWidthValue}%`
        }}>
          {children}
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
