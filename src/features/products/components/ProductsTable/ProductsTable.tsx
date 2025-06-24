import type { IProduct } from "../../../../shared/products/types";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  Table,
  Td,
  Th,
  AddButton,
  TableWrapper,
  ActionGroup,
  IconButton,
  HeaderActions,
  FilterInput,
} from "../products.styles";
import { formatDate, formatPrice } from "../../../../shared/utils/format";

interface Props {
  products: IProduct[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onAdd?: () => void;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
}

export function ProductsTable({
  products,
  onDelete,
  onEdit,
  onAdd,
  filterValue,
  onFilterChange,
}: Props) {
  return (
    <TableWrapper>
      <HeaderActions>
        <FilterInput
          type="text"
          placeholder="Filtrar por nome ou categoria..."
          value={filterValue}
          onChange={(e) => onFilterChange?.(e.target.value)}
        />
        <AddButton onClick={onAdd}>+ Adicionar produto</AddButton>
      </HeaderActions>

      <Table>
        <thead>
          <tr>
            <Th>Imagem</Th>
            <Th>Nome</Th>
            <Th>Categoria</Th>
            <Th>Preço</Th>
            <Th>Data</Th>
            <Th>Ações</Th>
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
              <Td>
                <ActionGroup>
                  <IconButton
                    onClick={() => onEdit?.(String(id))}
                    title="Editar"
                  >
                    <FaEdit size={16} />
                  </IconButton>
                  <IconButton
                    onClick={() => onDelete?.(String(id))}
                    title="Excluir"
                  >
                    <FaTrash size={16} />
                  </IconButton>
                </ActionGroup>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
