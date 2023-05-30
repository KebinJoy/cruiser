import Card from "@/ui/components/Card";
import AppNavBar from "../app/AppNavBar";

const AboutPage = () => {
  return (
    <>
      <AppNavBar />
      <h1 className="m-16 text-3xl font-bold">About</h1>
      <p className="text-medium mx-16 my-8">
        This is a dummy project built for interview. The tech-stack uses NextJS
        13, Tailwind CSS and Apollo GQL. The GQL API is by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tmdb.apps.quintero.io/"
        >
          TMBD
        </a>
        .
      </p>

      <p className="text-medium mx-16 my-8">
        To run the project, clone it into your machine and do{" "}
        <span className="font-mono font-semibold">npm i</span> followed by{" "}
        <span className="font-mono font-semibold">npm run dev</span>`.
      </p>

      <h2 className="mx-16 my-8 text-2xl font-bold">Tech-Stack</h2>
      <main
        className={`flex flex-col items-center justify-between p-8 sm:px-10 md:p-12 lg:p-24`}
      >
        <div className="mb-32 grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Card
            title="NextJS"
            href="https://nextjs.org/"
            description="The React Framework for the Web"
            variant="external"
          />
          <Card
            title="Tailwind"
            href="https://tailwindcss.com/"
            description="Rapidly build modern websites without ever leaving your HTML."
            variant="external"
          />

          <Card
            title="GraphQL"
            href="https://graphql.org/"
            variant="external"
            description="A query language for your API"
          />
          <Card
            title="Apollo GraphQL"
            href="https://www.apollographql.com/docs/react/"
            variant="external"
            description="Apollo Client is the industry-standard GraphQL client library."
          />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
