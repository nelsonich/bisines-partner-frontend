function useServerSide() {
  const isServerSide = typeof window === 'undefined';

  return {
    isServerSide,
  };
}

export default useServerSide;
