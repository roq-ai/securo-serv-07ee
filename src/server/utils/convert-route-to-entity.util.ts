const mapping: Record<string, string> = {
  accounts: 'account',
  jobs: 'job',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
