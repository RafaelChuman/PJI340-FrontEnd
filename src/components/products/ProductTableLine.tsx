import { RiPencilLine } from "react-icons/ri";
import { Product } from "../../services/hooks/useProducts";

interface TableLineProps {
  product: Product | undefined;
  isWideVersion: boolean | undefined;
}

export function ProductTableLine({
  product,
  isWideVersion = true,
}: TableLineProps) {
  if (!product) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <p>{product.category?.name}</p>
      </td>
      <td>
        <div>
          <p>{product.name}</p>
        </div>
      </td>
      {isWideVersion && (
        <td>
          <img src={product.image} alt={product.name}></img>{" "}
        </td>
      )}
      <td>
        <div>
          <p>
            {product.quantityValue} {product.quantityUnit}
          </p>
        </div>
      </td>
      <td>
        <div>
          <p>{product.value}</p>
        </div>
      </td>
      <td>
        <button className="InputButton">
          <RiPencilLine fontSize="16" />
          {isWideVersion && <p>&nbsp; Editar</p>}
        </button>
      </td>
    </tr>
  );
}
