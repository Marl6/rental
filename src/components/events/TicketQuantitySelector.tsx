"use client";

export type TicketQuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export function TicketQuantitySelector({
  value,
  onChange,
}: TicketQuantitySelectorProps) {
  return (
    <div>
      <button type="button" onClick={() => onChange(Math.max(0, value - 1))}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
