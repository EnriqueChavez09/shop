import { HomeQuality, HomeRecommended, HomeWelcome } from "../containers";
import { BasicLayout } from "../layouts";

export default function Home() {
  return (
    <>
      <BasicLayout>
        <main>
          <HomeWelcome />
          <HomeQuality />
          <HomeRecommended />
        </main>
      </BasicLayout>
    </>
  );
}
