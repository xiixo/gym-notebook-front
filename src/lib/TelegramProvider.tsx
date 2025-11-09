import {useEffect} from "react";

import WebApp from "@twa-dev/sdk";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!WebApp?.initDataUnsafe) return;

    WebApp.ready();
    WebApp.expand();
    WebApp.disableVerticalSwipes();

    console.log(`First name: ${WebApp?.initDataUnsafe?.user?.first_name}`)
    console.log(`Safe area inset: ${JSON.stringify(WebApp?.safeAreaInset)}`)
    console.log(`Content save area inset: ${JSON.stringify(WebApp?.contentSafeAreaInset)}`)
  }, []);

  return (
    <>
      {children}
    </>
  );
}
