import { useEffect } from "react";

function useAutoRefresh() {
  useEffect(() => {
    async function checkVersion() {
      try {
        const res = await fetch("/version.json", { cache: "no-store" });
        const data = await res.json();

        const currentVersion = localStorage.getItem("app_version");

        if (currentVersion && currentVersion !== data.version) {
          localStorage.clear();
          window.location.reload(true);
        }

        localStorage.setItem("app_version", data.version);
      } catch (err) {
        console.error("Version check failed", err);
      }
    }

    checkVersion();
  }, []);
}

export default useAutoRefresh;