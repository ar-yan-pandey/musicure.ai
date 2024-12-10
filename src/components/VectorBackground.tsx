export function VectorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#4c1d95', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,500 C200,300 300,100 500,100 C700,100 800,300 1000,500 C800,700 700,900 500,900 C300,900 200,700 0,500Z"
            fill="url(#grad1)"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,500 C200,300 300,100 500,100 C700,100 800,300 1000,500 C800,700 700,900 500,900 C300,900 200,700 0,500Z;
                M0,500 C200,400 300,200 500,200 C700,200 800,400 1000,500 C800,600 700,800 500,800 C300,800 200,600 0,500Z;
                M0,500 C200,300 300,100 500,100 C700,100 800,300 1000,500 C800,700 700,900 500,900 C300,900 200,700 0,500Z"
            />
          </path>
        </svg>
      </div>
      
      {/* Music notes and waves */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C150,30 350,30 500,100 C650,170 850,170 1000,100 L1000,200 L0,200 Z"
            fill="#4c1d95"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,100 C150,30 350,30 500,100 C650,170 850,170 1000,100 L1000,200 L0,200 Z;
                M0,100 C150,170 350,170 500,100 C650,30 850,30 1000,100 L1000,200 L0,200 Z;
                M0,100 C150,30 350,30 500,100 C650,170 850,170 1000,100 L1000,200 L0,200 Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}