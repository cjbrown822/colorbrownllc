import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import {Parallax} from "react-parallax";
import {
    AppBar,
    Box,
    Button,
    Container, CssBaseline,
    GlobalStyles,
    Icon,
    IconButton, Link,
    MenuItem,
    NoSsr,
    Toolbar,
    Typography
} from "@mui/material";
import {Close, CropSquare, Maximize, Menu, Minimize, Remove, Terminal} from "@mui/icons-material";
import { Menu as MenuComponent } from "@mui/material"
import {Fragment, useEffect, useRef, useState} from "react";
// @ts-ignore
import Timer from "node";
import {useElapsedTime} from "use-elapsed-time";

const Main = styled.main`
  height: 100vh;
`;

const Header = styled.h1`
  font-family: "Cascadia Code", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
  color: #4af626;
  text-transform: full-width;
  margin-left: 15px;
  margin-bottom: 0;
  display: flex;
`;

const SubHeader = styled.h4`
  font-family: "Cascadia Code", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: .7;
  color: #4af626;
  text-transform: capitalize;
  margin: 5px 0 15px 15px;
`;

const TerminalBox = styled(Box)`
  background-color: rgba(0,0,0, 0.75);
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 100px;
  min-width: 800px;
  min-height: 600px;
`;

const TitleBar = styled.div`
  background-color: black;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  color: white;
`;

const Cursor = styled.div`
  height:  14px;
  background-color: #4af626;
  width: 1px;
  margin-left: 3px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-child(n){
    padding-right: 5px;
  }
`;

const TitleBarHeader = styled.div`
  display: flex;
  align-items: center;
  :nth-child(n){
    padding-right: 10px;
  }
`;

export const pages = [{ text: "About Us", href: "about"}, { text: "Pricing", href: "pricing"}, { text: "Contact" , href: "contact"}];

const Home: NextPage = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const [ showCursor, setShowCursor ] = useState<boolean>(false);

    const options = {
        isPlaying: true,
        duration: .65,
        onComplete: () => {
            setShowCursor(!showCursor);
            return {
                shouldRepeat: true
            }
        }
    }
    const { elapsedTime } = useElapsedTime(options);
    const date = new Date();
    const year = date.getFullYear();

  return (
    <Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
      <Head key={"index-head"}>
        <title>Christian J Brown</title>
        <meta name="description" content="Christian J Brown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
          <NoSsr>
              <AppBar position={"fixed"} color="default"
                      elevation={0}
                      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                  <Toolbar sx={{ flex: 'wrap'}}>
                      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, userSelect: 'none', cursor: 'pointer'  }}>
                          Color Brown LLC
                      </Typography>
                      <nav>
                          {pages.map((page) => (
                              <Link
                                  key={page.href}
                                  variant="button"
                                  color="text.primary"
                                  href={page.href}
                                  sx={{ my: 1, mx: 1.5 }}
                              >
                                  {page.text}
                              </Link>
                          ))}
                      </nav>
                  </Toolbar>
              </AppBar>
              <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <TerminalBox>
                      <TitleBar>
                          <TitleBarHeader><Icon sx={{marginRight: 1}}><Terminal/></Icon></TitleBarHeader>
                          <ButtonGroup>
                              <Icon sx={{marginRight: 1}}>
                                  <Remove/>
                              </Icon>
                              <Icon sx={{marginRight: 1}}>
                                  <CropSquare/>
                              </Icon>
                              <Icon>
                                  <Close/>
                              </Icon>
                          </ButtonGroup>
                      </TitleBar>

                      <Header>Color Brown LLC</Header>
                      <Header style={{ marginTop: 0 }}>(c) Copyright { year } Color Brown LLC. All Rights Reserved</Header>
                      <SubHeader>Software Development Consulting</SubHeader>
                      <Header>
                          C:\&gt; {showCursor && <Cursor/> }
                      </Header>
                  </TerminalBox>
              </div>

              <div style={{minHeight: '100vh'}}>
                  <Container>
                      More Content
                  </Container>
              </div>
          </NoSsr>
      </Main>
      <footer>

      </footer>
    </Fragment>
  )
}

export default Home
