export interface SideMenu{
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  active?: boolean;
  
  sousMenu?: Array<SideMenu>;
}