export interface IHeaderProps {
  back?: any;
  text?: String;
 
}
export interface IBackHeaderProps {
  goback?: any;
  text?: String;
  Search?: any;
  OpenCart?: any;
}

export interface IButtonProps {
  onClick?: any;
  text?: string;
  containerStyle?: any;
  visible?: boolean;
}

export interface IAppRoot {
  onClick2?: any,
  children?: any,  
}

export interface ISpinner {
  loading?: boolean,
  text?:string
}