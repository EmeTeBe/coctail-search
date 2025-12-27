import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

export default function Layout() {
  const { loadFromStorage } = useAppStore();

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-10">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
}
