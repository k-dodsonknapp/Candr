
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import "./navbar.css"
import * as sessionActions from '../store/session';
import Search from './Search';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { MdEmojiEmotions } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgCommunity } from 'react-icons/cg';
import CreatCommunityModal from './CreateCommunityModal';



const NavBar = () => {

  const dispatch = useDispatch();
  let location = useLocation()
  const session = useSelector(state => state.session.user)
  // console.log("========>", session.user)
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState([]);
  // const [showSearchResults, setShowSearchResults] = useState();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [homeLabel, setHomeLabel] = useState(true);
  const [communitiesLabel, setCommunitiesLabel] = useState(false);
  const [communitiesButton, setCommunitiesButton] = useState(true);
  const [homeButton, setHomeButton] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  // const openSearch = () => {
  //   if (showSearchResults) return;
  //   setShowSearchResults(true);
  // }

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  useEffect(() => {console.log("HELLO", searchResult.includes('something'))},[searchResult])

  useEffect(() => {
    if (search.length === 0) {
      setSearchResult([])
    }
  }, [search])

  useEffect(() => {
    if (location.pathname === '/' || location.pathname) {
      setHomeLabel(true)
    } else {
      setHomeLabel(false)
    }
    if (location.pathname === '/communities') {
      setCommunitiesLabel(true)
      setCommunitiesButton(false)
      setHomeButton(true)
    } else {
      setCommunitiesLabel(false)
      setCommunitiesButton(true)
      setHomeButton(false)
    }

  }, [location])

  // useEffect(() => {
  //   setLength(cart.length);
  // }, [cart.length]);

  const clear = () => {
    // history.push('/')
    setSearch([])
  }

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    setShowCreateModal(true)
  }

  const handleHome = (e) => {
    e.preventDefault()
    history.push('/')
  }

  const handleLabelChange = () => {
    if (location.pathname === '/communitites') {
      setHomeLabel()
    }
  }

  const handleClick = async (e) => {
    await dispatch(sessionActions.login('demo@aa.io', 'password'))
    // history.push('/')
  }

  const onLogout = async (e) => {
    await dispatch(sessionActions.logout());
  };

  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <div className='nav-links'>
            <div className='logo-home'>
              <li id='logo-name'>
                <NavLink to='/' exact={true} activeClassName='active'>
                  <img className='elephant-logo' src='https://www.pinclipart.com/picdir/big/97-977614_elephant-guest-house-westport-centre-accommodation-elephant-logo.png' alt='logo' /><span className='app-name'>pettit </span>
                </NavLink>
              </li>
              <li className='dropdown-li'>
                {homeLabel && (
                  <button id='dropdown' onClick={openMenu}>
                    <div className='dropdown-text'>
                      <div className='home-icon'>
                        <img src='https://cdn.pixabay.com/photo/2013/07/12/14/49/home-148856_960_720.png' alt='Home' />
                      </div>
                      <div className='home-text'>
                        Home
                      </div>
                      <div className='down-arrow'>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-platform/down-arrow-10.png" alt='add post' />
                      </div>
                    </div>
                  </button>
                )}
                {communitiesLabel && (
                  <button id='dropdown' onClick={openMenu}>
                    <div className='dropdown-text'>
                      <div className='comm-label-text'>
                        <CgCommunity id="comm-icon-label" />
                        Communities
                      </div>
                      <div className='comm-down-arrow'>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-platform/down-arrow-10.png" alt='add post' />
                      </div>
                    </div>
                  </button>
                )}
                {showMenu && (
                  <ul className='profile-options'>
                    <div className='dropdown-div'>
                      {!session && (
                        <NavLink to='/login' onClick={handleLabelChange} exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns' id='login-div'>
                            <li>
                              <RiLogoutBoxRFill id="login-icon" />
                              <span className='signup-span'>
                                Login
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {session && communitiesButton && (
                        <NavLink to='/communities' onClick={handleClick} exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li id='demo-li'>
                              <CgCommunity id="demo-icon" />
                              <span className='signup-span'>
                                Communities
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {homeButton && (
                        <NavLink to='/' onClick={handleHome} exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li id='add-comm-li'>
                              <div className='home-icon'>
                                <img src='https://cdn.pixabay.com/photo/2013/07/12/14/49/home-148856_960_720.png' alt='Home' />
                              </div>
                              <div className='home-text'>
                                Home
                              </div>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {session && (
                        <NavLink to='/communities' onClick={handleCreateCommunity} exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li id='add-comm-li'>
                              <AiOutlinePlus id='add-comm-icon' />
                              <span className='add-community-span'>
                                Add Community
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {!session && (
                        <NavLink to='/' onClick={handleClick} exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li id='demo-li'>
                              <MdEmojiEmotions id="demo-icon" />
                              <span className='signup-span'>
                                Demo
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {!session && (
                        <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li id='signup-li'>
                              <FaWpforms id="signup-icon" />
                              <span className='signup-span'>
                                Sign Up
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                      {session && (
                        // <div className='dropdown-btns'>
                        //   <li>
                        //     {/* <LogoutButton /> */}

                        //   </li>
                        // </div>
                        <NavLink to='/sign-up' exact={true} onClick={onLogout} activeClassName='active' style={{ textDecoration: 'none', color: "black" }}>
                          <div className='dropdown-btns'>
                            <li>
                              <FaWpforms id="logout-icon" />
                              <span className='logout-span'>
                                Logout
                              </span>
                            </li>
                          </div>
                        </NavLink>
                      )}
                    </div>
                  </ul>
                )}
              </li>
            </div>
            <div className='headersearch'>
              <Search search={search} setSearch={setSearch} searchResult={searchResult} setSearchResult={setSearchResult} />
              <div className='searchresultcontainer'>
                {searchResult.length > 0 && !searchResult.includes('something') ? searchResult.map(result => (
                  <Link onClick={clear} className='searchLink' to={`/posts/${result.id}`}>
                    <div className='searchresults'>{result?.title}</div>
                  </Link>
                )) : searchResult.includes('something') && (
                  <Link>No results found</Link>
                )}
              </div>
            </div>
            <div className='right-side'>
              {!session && (
                <li id='new-post-link'>
                  <NavLink to='/login' className='idk' exact={true} activeClassName='active'>
                    Login
                  </NavLink>
                </li>
              )}
              {session && (
                <li id='new-post-link'>
                  <NavLink to='/posts/new' className='idk' exact={true} activeClassName='active'>
                    New Post <AiOutlinePlus id='new-post-icon' />
                  </NavLink>
                </li>
              )}
              {session && (
                <li id='new-post-link'>
                  <NavLink className='idk' to='/sign-up' exact={true} onClick={onLogout} activeClassName='active' >
                    Logout
                    <FaWpforms id="new-post-icon" />
                  </NavLink>
                </li>
              )}
              {/* {session && (
                <div className='logged-in-message'>
                  Happy browsing {session.username}!
                </div>
              )} */}
            </div>
          </div>
        </ul>
      </nav>

      {showCreateModal && (
        <CreatCommunityModal setShowCreateModal={setShowCreateModal} showCreateModal={showCreateModal} />
      )}
    </div>
  );
}

export default NavBar;
