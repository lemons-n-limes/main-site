import { createSignal } from "solid-js";
import { IoCloseSharp } from 'solid-icons/io'

function Proxy() {
    const [currentURL, setCurrentURL] = createSignal("");

    function getURL(url) {
      // Check if the URL contains "www.reddit.com" and replace it with "old.reddit.com"
      if (url.includes("www.reddit.com")) {
        url = url.replace("www.reddit.com", "old.reddit.com");
      }
      return window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(url);
    }
  
    function navigate(url) {
      setCurrentURL(getURL(url))
    }

    function closeWeb() {
      setCurrentURL("")
    }

    window.navigate = navigate
  return (
    <>
      <iframe src={currentURL()} data-open={currentURL() ? "true" : "false"} class="web"></iframe>
      <div class="close" onclick={closeWeb}>
        <IoCloseSharp fill="var(--text-inverse)" />
      </div>
    </>
  );
}

export default Proxy;