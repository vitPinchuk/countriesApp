function Shimmer(props: { width: string; height: string }) {
  const { width, height } = props;
  return <div className={`animate-shimmer bg-shimmer bg-[length:800px_110px] mb-4 ${width} ${height}`}></div>;
}

export default Shimmer;
