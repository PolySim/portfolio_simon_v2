export type UseVisible = (
  rootElRef: React.RefObject<HTMLDivElement>,
  top: string,
  keepVisible?: boolean,
) => { isVisible: boolean };
