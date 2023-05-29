import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Login from "./pages/login";
import AddUser from "./pages/Admin/Users/addUser";
import EditRole from "./pages/Admin/Users/editRole";
import UploadIOS from "./pages/Projects/uploadIOS";
import CustomTheme from "./components/theme";
import UploadAndroid from "./pages/Projects/uploadAndroid";
import EditIOS from "./pages/Projects/editIOS";
import EditAndroid from "./pages/Projects/editAndroid";
import ProjectsMain from "./pages/Projects/projectsMain";
import Upload from "./pages/Projects/uploadProject";
import UploadProject from "./pages/Projects/uploadProject";
import ViewProject from "./pages/Projects/viewProject";
import UsersMain from "./pages/Admin/Users/usersMain";
import RemoveUser from "./pages/Admin/Users/removeUser";
import AdminMain from "./pages/Admin/adminMain";
import TesterMain from "./pages/Tester/testerMain";
import DeveloperMain from "./pages/Developer/developerMain";
import ViewIOSList from "./pages/Tester/viewIOS";
import ViewAndroidList from "./pages/Tester/viewAndroid";

function App() {
  return (
      <Router>
        <div className="App">
          <ThemeProvider theme={CustomTheme}>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/admin-main" element={<AdminMain/>} />
              <Route path="/dev-main" element={<DeveloperMain/>} />
              <Route path="/tester-main" element={<TesterMain/>} />

              {/* User Management */}
              <Route path="/user" element={<UsersMain/>} />
              <Route path="/add-user" element={<AddUser/>} />
              <Route path="/edit-role" element={<EditRole/>} />
              <Route path="/remove-user" element={<RemoveUser/>} />

              {/* Project Related path */}
              <Route path="/upload-ios" element={<UploadIOS/>} />
              <Route path="/upload-android" element={<UploadAndroid/>} />
              <Route path="/edit-ios" element={<EditIOS/>} />
              <Route path="/edit-android" element={<EditAndroid/>} />
              <Route path="/project" element={<ProjectsMain/>}/>
              <Route path="/upload-project" element={<UploadProject/>}/>
              <Route path="/view-project" element={<ViewProject/>}/>

              {/* Tester Related Path */}
              <Route path="/view-ios-list" element={<ViewIOSList/>} />
              <Route path="/view-android-list" element={<ViewAndroidList/>} />
            </Routes>
          </ThemeProvider>
        </div>
       </Router>
     
  );
}

export default App;
