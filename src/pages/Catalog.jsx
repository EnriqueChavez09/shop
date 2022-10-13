import { CatalogProduct } from "../containers";
import { BasicLayout } from "../layouts";

export default function Catalog() {
  document.title = "DEV3CH | Catálogo";
  return (
    <>
      <BasicLayout>
        <main>
          <CatalogProduct />
        </main>
      </BasicLayout>
    </>
  );
}
