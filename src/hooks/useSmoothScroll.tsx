const useSmoothScroll = () => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollToRef };
};

export default useSmoothScroll;
