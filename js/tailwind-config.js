tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        marmota: {
          blue: '#1D6FB8',
          sky: '#6EC1F5',
          orange: '#FF8A00',
          yellow: '#FFD983',
          ink: '#0D2845',
          muted: '#64748B',
          soft: '#FFF6EB',
          cloud: '#F8FAFC',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.10)',
        lift: '0 22px 60px rgba(31, 78, 216, 0.18)',
      },
    },
  },
};
