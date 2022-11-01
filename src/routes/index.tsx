import HomePage from "@/pages";


import { Routes, Route} from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import CollaboratorsComponent from "@/pages/collaborators";
import ZonesComponent from "@/pages/zones";
import ActivitiesComponent from "@/pages/activities";
import LubrificationSystemsComponent from "@/pages/lubrificationSystem";
import ERsComponent from "@/pages/ers";

function AppRoutes (){
  
  return (
    <Routes>
        <Route element={<HomePage/>} path="/"></Route>
        <Route element={<Dashboard/>} path="/dashboard"></Route>
        <Route element={<CollaboratorsComponent/>} path="/collaborators"></Route>
        <Route element={<ZonesComponent/>} path="/zones"></Route>
        <Route element={<ActivitiesComponent/>} path="/activities"></Route>
        <Route element={<LubrificationSystemsComponent/>} path="/lubrificationsystems"></Route>
        <Route element={<ERsComponent/>} path="/ers"></Route>
    </Routes>
  );
};

export default AppRoutes;