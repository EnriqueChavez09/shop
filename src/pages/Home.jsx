import { HomeQuality, HomeWelcome } from "../containers";
import { BasicLayout } from "../layouts";

export default function Home() {
  return (
    <>
      <BasicLayout>
        <main>
          <HomeWelcome />
          <HomeQuality />
        </main>
      </BasicLayout>
    </>
  );
}
