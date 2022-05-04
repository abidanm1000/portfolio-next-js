const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>I am an aspiring web developer who loves to create different projects</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
