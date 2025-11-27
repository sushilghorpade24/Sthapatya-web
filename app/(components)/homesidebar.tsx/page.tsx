import HomeSidebarClient from "../HomeSidebarClient";

export default function HomeSidebar(){
  return<HomeSidebarClient activeSection={""} onSectionClick={function (id: string): void {
    throw new Error("Function not implemented.");
  } }/>

}