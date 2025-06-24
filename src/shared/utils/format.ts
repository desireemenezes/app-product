/** Formata um número como valor monetário em Real */
export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/** Converte uma string de data para o formato dd/mm/aaaa */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR");
}
