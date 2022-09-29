import { HomeWelcome } from "../containers";
import { BasicLayout } from "../layouts";

export default function Home() {
  return (
    <>
      <BasicLayout>
        <main>
          <HomeWelcome />
        </main>
      </BasicLayout>
    </>
  );
}
