import { Product } from "../../services/hooks/useProducts";
import { ProductTableLine } from "./ProductTableLine";
import { TableContainer } from "./ProductTable.styled";


interface ProductTableProps {
  productData: Product[] | undefined;
  isWideVersion: boolean | undefined;
}

export function ProductTable({ productData, isWideVersion }: ProductTableProps) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th >
            <input type={"checkbox"} ></input>
          </th>
          <th>Produtos</th>
          {isWideVersion && <th></th>}
          <th>Tamanho</th>
          <th>Valor</th>          
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {productData ? (
          productData.map((product) => {
            return (
              <ProductTableLine
                key={product.id}
                product={product}
                isWideVersion={isWideVersion}
              />
            );
          })
        ) : (
          <ProductTableLine product={undefined}  isWideVersion={false} />
        )}
      </tbody>
    </TableContainer>
  );
}
