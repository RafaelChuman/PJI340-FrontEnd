import HomePage from "@/pages";


import { Routes, Route} from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import CollaboratorsComponent from "@/pages/collaborators";
import ZonesComponent from "@/pages/zones";

function AppRoutes (){
  
  return (
    <Routes>
        <Route element={<HomePage/>} path="/"></Route>
        <Route element={<Dashboard/>} path="/dashboard"></Route>
        <Route element={<CollaboratorsComponent/>} path="/collaborators"></Route>
        <Route element={<ZonesComponent/>} path="/zones"></Route>
    </Routes>
  );
};

export default AppRoutes;