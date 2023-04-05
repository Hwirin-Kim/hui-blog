import Main from "@/components/main/Main";
import Weather from "@/components/main/Weather";
import { getAllTags, getTodayFact, getWeather } from "@/lib/api";

const Home = ({ res, weather, tagArry }) => {
  return (
    <>
      <Main res={res} weather={weather} tagArry={tagArry} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await getTodayFact();
  const weather = await getWeather();
  const tagArry = await getAllTags();

  return {
    props: { res, weather, tagArry },
  };
}
