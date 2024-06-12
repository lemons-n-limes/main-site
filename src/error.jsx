import Head from "./components/head";

function Error() {
  return (
    <>
        <Head defaultTitle="Error" />
        <div class="errorTitle">404 Error</div>
        <div class="errorText">A website tried to open a new tab, probably to show an advert. Try follow the link again.</div>
    </>
  );
}

export default Error;