export interface SideMenu{
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  sousMenu?: Array<SideMenu>;
}