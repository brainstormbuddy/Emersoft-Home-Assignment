interface Props {
  viewBox?: string;
  width?: number;
  height?: number;
  className?: string;
}
export default function Logo({
  viewBox = "0 0 114 56",
  width = 114,
  height = 56,
  className,
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g id="logo" fill="#333" fillRule="nonzero">
          <path d="M0 44.244V8.884h10.56V0h15.654v2.28H13.359v6.604h17.203V0h3.679l3.408 8.884h6.042L47.036 0h3.59v8.884h10.521v37.64H42.7l5.666 9.44h-3.224l-5.33-9.44h-6.45v9.44h-2.8v-9.44H13.36v7.16h13.455v2.28H10.559v-9.44H0v-2.28zm33.052-35.36h2.087l-.888-2.31-.82-2.49-.48-1.61.045 1.625.055 2.77v2.015zm13.02 0h2.034V6.869c0-1.525.045-2.99.13-4.394-.475 1.75-.905 3.114-1.29 4.1l-.874 2.309zM10.558 20.637v-9.473H2.28v33.08h8.28v-8.918h15.655v2.28H13.359v6.628h11.975v.01h5.228v-8.918h9.707c2.324 0 4.118.52 5.378 1.565 1.264 1.04 1.9 2.49 1.9 4.35 0 1.135-.247 2.136-.734 3.003h12.055v-33.08h-8.243v9.474h-2.52v-9.474h-2.897l-3.59 9.474H39.66l-3.644-9.474h-2.964v9.474h-2.489v-9.474H13.36v7.194h13.455v2.28H10.559zM44.732 41.27c0-1.204-.405-2.12-1.22-2.75-.814-.63-1.989-.944-3.523-.944H33.36l.002 6.668h10.056c.037-.026.073-.053.109-.084.803-.686 1.204-1.65 1.204-2.89zm-6.21-30.107l1.207 3.145c.195.58.385 1.195.565 1.855.18.66.3 1.135.36 1.43.074-.395.24-.985.49-1.78.25-.8.414-1.3.504-1.505l1.184-3.145h-4.31zm41.265 22.87c0 1.5-.564 2.65-1.69 3.464-1.129.81-2.708 1.215-4.737 1.215-1.97 0-3.494-.325-4.564-.975-1.064-.65-1.764-1.66-2.084-3.04l2.33-.454c.224.85.689 1.47 1.389 1.865.705.394 1.679.594 2.929.594 1.339 0 2.314-.205 2.933-.615.62-.41.93-1.024.93-1.85 0-.624-.215-1.13-.64-1.524-.43-.39-1.124-.71-2.079-.965l-1.89-.5c-1.514-.39-2.588-.775-3.228-1.15-.64-.375-1.14-.835-1.505-1.37-.36-.54-.54-1.2-.54-1.98 0-1.45.516-2.549 1.545-3.31 1.03-.754 2.529-1.134 4.503-1.134 1.75 0 3.134.31 4.164.925 1.035.615 1.684 1.6 1.96 2.955l-2.375.295c-.145-.705-.54-1.25-1.18-1.63-.64-.375-1.494-.565-2.569-.565-1.19 0-2.069.18-2.634.545-.57.365-.85.915-.85 1.655 0 .45.116.82.35 1.115.236.29.58.54 1.04.744.46.206 1.425.49 2.9.85 1.394.355 2.403.68 3.018.975.615.3 1.1.63 1.455.99.355.361.636.787.829 1.255.195.475.29 1.015.29 1.62zm16.5-3.555c0 2.775-.61 4.84-1.83 6.2-1.22 1.354-2.989 2.034-5.313 2.034-2.314 0-4.059-.705-5.243-2.114-1.18-1.416-1.77-3.455-1.77-6.12 0-5.469 2.365-8.204 7.098-8.204 2.424 0 4.203.665 5.343 2 1.144 1.335 1.714 3.4 1.714 6.204zm-2.77 0c0-2.184-.32-3.774-.97-4.77-.649-.99-1.739-1.484-3.273-1.484-1.54 0-2.654.505-3.344 1.515-.69 1.01-1.03 2.59-1.03 4.74 0 2.089.335 3.659 1.015 4.708.68 1.05 1.744 1.576 3.199 1.576 1.58 0 2.71-.51 3.389-1.526.68-1.014 1.014-2.599 1.014-4.759zm9.322-5.984v13.918h-2.634V24.494h-2.23v-1.92h2.23V20.78c0-1.45.315-2.49.95-3.13.635-.635 1.61-.955 2.919-.955.73 0 1.35.06 1.859.175v2.01a7.125 7.125 0 0 0-1.175-.115c-.674 0-1.16.17-1.464.515-.305.345-.455.964-.455 1.87v1.424h3.094v1.92h-3.094zM114 38.297c-.868.236-1.764.355-2.664.355-2.114 0-3.17-1.195-3.17-3.59V24.494h-1.828v-1.92h1.934l.775-3.54h1.76v3.54h2.928v1.92h-2.929v9.994c0 .76.125 1.295.37 1.605.25.305.685.46 1.3.46.35 0 .86-.07 1.524-.205v1.95z"></path>
        </g>
      </g>
    </svg>
  );
}