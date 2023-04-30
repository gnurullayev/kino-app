export interface INavbar {
    toggleDrawer: (
      open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  }