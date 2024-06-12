import { A } from "@solidjs/router";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="footerItem">© {String(new Date().getFullYear())} 1 Network.</div>
        <A href="/contributers" class="footerItem link footerItemRight">Contributors</A>
        <A href="/privacy" class="footerItem link">Privacy</A>
      </div>
    </>
  );
}

export default Footer;
