import {useEffect} from "react";

import WebApp from "@twa-dev/sdk";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!WebApp?.initDataUnsafe) return;

    WebApp.ready();
    WebApp.expand();
    WebApp.disableVerticalSwipes();
  }, []);

  return (
    <>
      {children}
    </>
  );
}
