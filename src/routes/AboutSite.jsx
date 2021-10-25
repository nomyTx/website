import globe from "../assets/globe.svg";

export default () => (
  <>
    <div class="flex-col mx-4 mt-6 text-xl">
      <p class="text-4xl">About site:</p>

      <p class="mx-3">
        The source code is available for anyone to view on{" "}
        <a href="https://github.com/nomyTx/website" class="underline">
          GitHub.
        </a>
      </p>

      <p class="text-4xl">Big thanks to:</p>
      <a href="https://github.com/yellowsink" class="text-3xl mx-2 underline">
        Yellowsink
      </a>
      <a class="inline-flex" href="https://yellowsink.vercel.app/">
        <img src={globe} />
      </a>
      <p class="mx-3">Motivated me to make the website and helped a lot.</p>

      <a href="https://github.com/Beefers" class="text-3xl mx-2 underline">
        Beef
      </a>
      <a class="inline-flex" href="https://beef.vercel.app/">
        <img src={globe} />
      </a>
      <p class="mx-3">Made the sidebar code and helped a lot.</p>
    </div>
  </>
);
