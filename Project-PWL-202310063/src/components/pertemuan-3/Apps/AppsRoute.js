import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../modules/components/home/Home";
import Explore from "../modules/components/explore/Explore";
import Messages from "../modules/components/messages/Messages";
import Feeds from "../modules/components/explore/widget/Feeds";
import Reels from "../modules/components/explore/widget/Reels";
import FYP from "../modules/components/explore/widget/FYP";
import Profiles from "../modules/components/profil/Profile";
import NotFound from "../layouts/components/notFound/notFound";
import Login from "../modules/components/login/Login";

export default function AppRoute() {
  const routes = [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/explore",
      component: Explore,
      children: [
        { path: "feeds", component: Feeds },
        { path: "reels", component: Reels },
        { path: "fyp", component: FYP },
      ],
    },
    {
      path: "/messages",
      component: Messages,
    },
    {
      path: "/profile",
      component: Profiles,
    },
  ];

  return (
    <Routes>
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {routes.map((e, index) =>
        e.children ? (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          >
            {e.children.map((c, index) => (
              <Route path={c.path} element={<c.component />} key={index} />
            ))}
          </Route>
        ) : (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          />
        )
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}