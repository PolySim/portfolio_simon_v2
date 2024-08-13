export type UseWindowSizeStore = {
  width: number;
  height: number;
  toggleWindowSize: ({
    width,
    height,
  }: {
    width?: number;
    height?: number;
  }) => void;
};
