export default function Responsive() {
  return (
    <div className="
  text-xs                /* default: <640px (mobile kecil) */
  sm:text-sm             /* ≥640px (small devices / sm) */
  md:text-base           /* ≥768px (medium devices / md) */
  lg:text-lg             /* ≥1024px (large devices / lg) */
  xl:text-xl             /* ≥1280px (extra large / xl) */
  2xl:text-2xl           /* ≥1536px (extra extra large / 2xl) */
  p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12
  bg-blue-100 rounded-lg
">
  <p>
    rumus responsive
  </p>
  <ul className="list-disc pl-5">
    <li><strong>Default (&lt;640px):</strong> text-xs, p-2</li>
    <li><strong>sm (≥640px):</strong> text-sm, p-4</li>
    <li><strong>md (≥768px):</strong> text-base, p-6</li>
    <li><strong>lg (≥1024px):</strong> text-lg, p-8</li>
    <li><strong>xl (≥1280px):</strong> text-xl, p-10</li>
    <li><strong>2xl (≥1536px):</strong> text-2xl, p-12</li>
  </ul>
</div>

  );
}
