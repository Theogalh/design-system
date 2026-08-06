interface Crumb { label: string; href?: string }
interface BreadcrumbProps { items?: Crumb[] }
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
