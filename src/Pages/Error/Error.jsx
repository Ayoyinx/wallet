import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  document.title = "Page not found(404)";
  return (
    <>
      <section className="w-full min-h-[80vh] flex items-center bg-primary">
        <div className="container mx-auto grid place-items-center h-full px-4 sm:px-0">
          <h2 className="font-serif text-6xl text-center sm:text-7xl dark:text-zinc-100 text-white">Page not found</h2>
          <p className="text-lg sm:text-xl text-center dark:text-zinc-100 text-white mt-4">
            404 page does not exist.
          </p>
          <p className="text-lg mt-4 sm:text-xl text-center text-white mt-1">
            Create a wallet account today and fund your wallet.
          </p>
        </div>
      </section>
    </>
  );
}