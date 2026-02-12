import "./App.css";
import Asidebar from "./components/layout/asidebar";
import Main from "./components/layout/main";
import Notification from "./components/layout/notification";
import Topbar from "./components/layout/topbar";
function App() {
  return (
    <div className="h-screen bg-grey grid grid-cols-12 ">
      <div className="col-span-2 overflow-auto">
        <Asidebar />
      </div>
      <div className="col-span-8 flex flex-col min-w-0">
       <Topbar/>
       <div className="overflow-auto h-[calc(100vh-80px)]">

       <Main/>
       </div>
      </div>
      <div className="col-span-2 overflow-auto">
        <Notification />
      </div>
    </div>
  );
}

export default App;
