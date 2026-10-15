import React from 'react';
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom';
import {AppShell} from './components/Layout.jsx';
import {Toast} from './components/UI.jsx';
import Login from './pages/Login.jsx';import Dashboard from './pages/Dashboard.jsx';import Timetable from './pages/Timetable.jsx';import Availability from './pages/Availability.jsx';import Library from './pages/Library.jsx';import Marketplace from './pages/Marketplace.jsx';import NoticeBoard from './pages/NoticeBoard.jsx';import Profile from './pages/Profile.jsx';import StudyResources from './pages/StudyResources.jsx';
import {profileSeed} from './data/index.js';
export const StoreContext=React.createContext(null);
export default function App(){const [loggedIn,setLoggedIn]=React.useState(()=>localStorage.getItem('cc_demo_session')==='active');const [profile,setProfile]=React.useState(()=>{try{return {...profileSeed};}catch(e){return profileSeed}});const [toast,setToast]=React.useState(null);
const notify=msg=>{setToast(msg);setTimeout(()=>setToast(null),3500)};const updateProfile=next=>{setProfile(next);notify({type:'success',text:'Profile updated'});}
function onLogout(){localStorage.removeItem('cc_demo_session');setLoggedIn(false);}
function onLogin(){localStorage.setItem('cc_demo_session','active');setLoggedIn(true)}
return <StoreContext.Provider value={{profile,updateProfile,notify}}><Toast toast={toast}/><Routes>{!loggedIn?<Route path="/" element={<Login onLogin={onLogin} notify={notify}/>}/>:<Route path="/" element={<AppShell profile={profile} onLogout={onLogout} onToast={notify}><Dashboard/></AppShell>} />}</Routes></StoreContext.Provider>}
