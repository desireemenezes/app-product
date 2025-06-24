import { SkeletonRow, Table, Td, Th } from "../products.styles";

interface Props {
  rows: number;
}

export function SkeletonTable({ rows }: Props) {
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
        {[...Array(rows)].map((_, i) => (
          <SkeletonRow key={i}>
            <Td style={{ width: 60 }}></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </SkeletonRow>
        ))}
      </tbody>
    </Table>
  );
}
