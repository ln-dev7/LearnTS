declare module "scroll-to" {
  const scrollTo: (
    x: number, y: number,
    options: {
      duration?: number;
      ease?: string;
    }
  ) => void;

  export default scrollTo;
}
