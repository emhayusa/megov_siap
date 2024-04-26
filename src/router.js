import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import SidebarLayout from "src/layouts/SidebarLayout";
import BaseLayout from "src/layouts/BaseLayout";

import SuspenseLoader from "src/components/SuspenseLoader";
import LoggedArea from "./utils/LoggedArea";
import AdminArea from "./utils/AdminArea";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//Auth
const Login = Loader(lazy(() => import("src/pages/auth/Login")));
const Logout = Loader(lazy(() => import("src/pages/auth/Logout")));
// Pages
const LandingPage = Loader(lazy(() => import("src/pages/landingpage")));

// Status

const Status404 = Loader(
  lazy(() => import("src/pages/landingpage/Status/Status404"))
);
const Status500 = Loader(
  lazy(() => import("src/pages/landingpage/Status/Status500"))
);
const StatusComingSoon = Loader(
  lazy(() => import("src/pages/landingpage/Status/ComingSoon"))
);
const StatusMaintenance = Loader(
  lazy(() => import("src/pages/landingpage/Status/Maintenance"))
);

const Overview = Loader(lazy(() => import("src/pages/overview")));
// Dashboards
//const Crypto = Loader(lazy(() => import("src/pages/dashboards/Crypto")));
//const Aktivitas = Loader(lazy(() => import("src/pages/dashboards/Aktivitas")));
//const Notifikasi = Loader(
//  lazy(() => import("src/pages/dashboards/Notifikasi"))
//);

//const Messenger = Loader(
//  lazy(() => import("src/pages/applications/Messenger"))
//);

// Systems
//const UserRole = Loader(lazy(() => import("src/pages/systems/User/Role")));
//const UserList = Loader(lazy(() => import("src/pages/systems/User/List")));
const User = Loader(lazy(() => import("src/pages/systems/User")));
//const UserForm = Loader(lazy(() => import("src/pages/systems/User/UserForm")));

const Settings = Loader(lazy(() => import("src/pages/systems/Settings")));

// Akun
//const UserProfile = Loader(lazy(() => import("src/pages/akun/profile")));
//const UserSettings = Loader(lazy(() => import("src/pages/akun/settings")));

// Master
const Agama = Loader(lazy(() => import("src/pages/managements/Agama")));
const Bank = Loader(lazy(() => import("src/pages/managements/Bank")));
const Basemap = Loader(lazy(() => import("src/pages/managements/Basemap")));
const Gedung = Loader(lazy(() => import("src/pages/managements/Gedung")));
const GolonganDarah = Loader(
  lazy(() => import("src/pages/managements/GolonganDarah"))
);
const Jabatan = Loader(lazy(() => import("src/pages/managements/Jabatan")));
const Kantor = Loader(lazy(() => import("src/pages/managements/Kantor")));
const Organisasi = Loader(
  lazy(() => import("src/pages/managements/Organisasi"))
);
const Pangkat = Loader(lazy(() => import("src/pages/managements/Pangkat")));
const Wilayah = Loader(lazy(() => import("src/pages/managements/Wilayah")));

// Operasional
const Pegawai = Loader(lazy(() => import("src/pages/data/Pegawai")));

const routes = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "auth",
        children: [
          {
            path: "",
            element: <Navigate to="login" replace />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
        ],
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
          {
            path: "500",
            element: <Status500 />,
          },
          {
            path: "maintenance",
            element: <StatusMaintenance />,
          },
          {
            path: "coming-soon",
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "overview",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Overview />,
      },
    ],
  },
  {
    path: "systems",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="settings" replace />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "user",
        element: (
          <AdminArea>
            <User />
          </AdminArea>
        ),
      },
      /*
      {
        path: "user",
        children: [
          {
            path: "",
            element: <Navigate to="role" replace />,
          },
          {
            path: "role",
            element: <User tab="role" />,
          },
          {
            path: "list",
            element: <User tab="list" />,
          },
          {
            path: "add",
            element: <UserForm title="Add User" caption="Penambahan User" />,
          },
        ],
      },
      */
    ],
  },
  {
    path: "akun",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="profile" replace />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <Navigate to="details" replace />,
          },
          {
            path: "details",
            //   element: <UserProfile />,
          },
          {
            path: "settings",
            // element: <UserSettings />,
          },
        ],
      },
    ],
  },
  /*
  {
    path: "dashboards",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="aktivitas" replace />,
      },
      {
        path: "aktivitas",
        element: <Aktivitas />,
      },
      {
        path: "notifikasi",
        element: <Notifikasi />,
      },
    ],
  },
  */
  {
    path: "managements",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="agama" replace />,
      },
      {
        path: "agama",
        element: <Agama />,
      },
      {
        path: "bank",
        element: <Bank />,
      },
      {
        path: "basemap",
        element: <Basemap />,
      },
      {
        path: "gedung",
        element: <Gedung />,
      },
      {
        path: "golongan-darah",
        element: <GolonganDarah />,
      },
      {
        path: "jabatan",
        element: <Jabatan />,
      },
      {
        path: "kantor",
        element: <Kantor />,
      },
      {
        path: "organisasi",
        element: <Organisasi />,
      },
      {
        path: "pangkat",
        element: <Pangkat />,
      },
      {
        path: "wilayah",
        element: <Wilayah />,
      },
    ],
  },
  {
    path: "data",
    element: (
      <LoggedArea>
        <SidebarLayout />
      </LoggedArea>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="pegawai" replace />,
      },
      {
        path: "pegawai",
        element: <Pegawai />,
      },
    ],
  },
];

export default routes;
