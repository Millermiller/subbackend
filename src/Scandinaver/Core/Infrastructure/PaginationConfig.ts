export class PaginationConfig {
  total: number
  count: number
  per_page: number = 20
  current_page: number
  total_pages: number
  links: {} = {}
}
