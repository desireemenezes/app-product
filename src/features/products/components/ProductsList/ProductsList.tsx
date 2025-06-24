import type { IProduct } from "../../../../shared/products/types";
import { formatDate, formatPrice } from "../../../../shared/utils/format";
import {
  ProductCard,
  ProductInfo,
  ProductImage,
  ProductLabel,
  ProductValue,
  ProductListWrapper,
  ActionGroup,
  IconButton,
} from "../products.styles";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  products: IProduct[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function ProductsList({ products, onDelete, onEdit }: Props) {
  return (
    <ProductListWrapper>
      {products.map(({ id, image, name, categories, price, createdAt }) => (
        <ProductCard key={id}>
          <ProductImage src={image} alt={name} />
          <ProductInfo>
            <div>
              <ProductLabel>Nome: </ProductLabel>
              <ProductValue>{name}</ProductValue>
            </div>
            <div>
              <ProductLabel>Categoria: </ProductLabel>
              <ProductValue>
                {typeof categories === "string"
                  ? categories
                  : "Categoria desconhecida"}
              </ProductValue>
            </div>
            <div>
              <ProductLabel>Preço: </ProductLabel>
              <ProductValue>{formatPrice(price)}</ProductValue>
            </div>
            <div>
              <ProductLabel>Data: </ProductLabel>
              <ProductValue>{formatDate(createdAt)}</ProductValue>
            </div>
            <ActionGroup style={{ marginTop: "1rem" }}>
              <IconButton onClick={() => onEdit?.(String(id))} title="Editar">
                <FaEdit size={16} />
              </IconButton>
              <IconButton
                onClick={() => onDelete?.(String(id))}
                title="Excluir"
              >
                <FaTrash size={16} />
              </IconButton>
            </ActionGroup>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductListWrapper>
  );
}
