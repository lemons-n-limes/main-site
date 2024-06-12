import Head from "./components/head";

function Contributers() {
  return (
    <>
        <Head defaultTitle="Contributers" />
        <div class="errorTitle">Google</div>
        <ul class="contributers">
            <li><a class="errorText link" href="https://github.com">Me</a></li>
            <li><a class="errorText link" href="https://github.com">Forked code</a></li>
        </ul>
    </>
  );
}

export default Contributers;