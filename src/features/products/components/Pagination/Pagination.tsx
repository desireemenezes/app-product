import { PageButton, PaginationWrapper } from "../products.styles";

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ totalPages, currentPage, onPageChange }: Props) {
  if (!totalPages || totalPages < 1) return null;

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </PageButton>

      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        return (
          <PageButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PageButton>
        );
      })}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </PageButton>
    </PaginationWrapper>
  );
}
