import { Suspense, lazy } from "react";
import MesLoadingScreen from "./components/MesLoadingScreen/MesLoadingScreen";
import { RouteObject } from "react-router-dom";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<MesLoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

//   Layout page

const Layout = Loadable(
  lazy(() => import("./components/MesLayouts/MesLayout1/MesLayout1"))
);

// routes
// const routes:RouteObject[] = {
//     path:"layout1"
// }
