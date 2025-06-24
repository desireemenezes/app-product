import type { IProduct } from "../../../../shared/products/types";
import { Table, Td, Th } from "../products.styles";

interface Props {
  products: IProduct[];
}

export function ProductsTable({ products }: Props) {
  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("pt-BR");

  return (
    <Table>
      <thead>
        <tr>
          <Th>Imagem</Th>
          <Th>Nome</Th>
          <Th>Categoria</Th>
          <Th>Preço</Th>
          <Th>Data</Th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, image, name, categories, price, createdAt }) => (
          <tr key={id}>
            <Td>
              <img
                src={image}
                alt={name}
                width={50}
                height={50}
                style={{ objectFit: "cover", borderRadius: 4 }}
              />
            </Td>
            <Td>{name}</Td>
            <Td>
              {typeof categories === "string"
                ? categories
                : "Categoria desconhecida"}
            </Td>
            <Td>{formatPrice(price)}</Td>
            <Td>{formatDate(createdAt)}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
