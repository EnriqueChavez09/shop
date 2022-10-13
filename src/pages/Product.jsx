import { ProductRetrieve } from "../containers"
import { BasicLayout } from "../layouts"

export default function Product() {
  return (
    <>
      <BasicLayout>
        <main>
          <ProductRetrieve />
        </main>
      </BasicLayout>
    </>
  )
}
