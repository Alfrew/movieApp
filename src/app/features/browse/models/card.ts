export interface CardInfo {
  backgroundPath: string;
  ctas?: CardCta[];
  id: number;
  info?: string;
  subtitle: string;
  title: string;
}

export interface CardCta {
  iconEmpty: string;
  iconFill: string;
  isActive: boolean;
}
